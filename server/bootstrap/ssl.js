const acme = require('acme-client')
const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = async function ssl(server){
    let challengeFilePaths = {}
    let renewingCertPromise = null
    let lastRenewal
    let client
    let directoryUrl = acme.directory.letsencrypt[ENV.ssl.mode]
    let sslDataPath = path.resolve(os.homedir(), './ssl/')

    try {
        let accountData = JSON.parse(fs.readFileSync(`${sslDataPath}${ENV.ssl.mode}.json`), 'utf8')

        client = await new acme.Client({
            directoryUrl,
            ...accountData
        })

        console.log('Account exists')
    } catch (error) {
        console.log('Creating new account')
        let accountKey = await acme.forge.createPrivateKey()

        client = await new acme.Client({
            directoryUrl,
            accountKey
        })

        await client.createAccount({
            termsOfServiceAgreed: true
        })
        
        let accountData = {
            accountKey,
            accountUrl: client.getAccountUrl()
        }

        fs.mkdirSync(sslDataPath, { recursive: true })
        fs.writeFileSync(path.resolve(`${sslDataPath}${ENV.ssl.mode}.json`), JSON.stringify(accountData), 'utf8')
    }

    async function newCert(){
        const [key, csr] = await acme.forge.createCsr({
            commonName: ENV.ssl.domains[0],
            altNames: ENV.ssl.domains
        })

        let cert = await client.auto({
            csr,
            email: ENV.ssl.email,
            challengePriority: ['http-01'],
            termsOfServiceAgreed: true,
            async challengeCreateFn(authz, challenge, challengeContents) {
                if (challenge.type === 'http-01') {
                    challengeFilePaths[`/.well-known/acme-challenge/${challenge.token}`] = challengeContents
                    console.log('Created SSL challenge')
                }
            },
            async challengeRemoveFn(auths, challenge){
                delete challengeFilePaths[`/.well-known/acme-challenge/${challenge.token}`]
                console.log('Deleted challenge file')
            }
        })

        console.log('SSL Renewed')

        lastRenewal = new Date()

        server.setSecureContext({
            key,
            cert
        })
    }

    function shouldRenewCert(){
        //if there is no renewal date, generate a new cert
        if(!lastRenewal) return true

        //check last renewal, and if more than 2 months, renew certificate
        //letsnecrypt certificates expire every 3 months
        return new Date() > new Date(lastRenewal).setMonth(lastRenewal.getMonth() + 2)
    }

    //create first cert when server begins listening
    server.on('listening', () => {
        try {
            renewingCertPromise = newCert()
        } catch(error){
            console.error('SSL Could not be renewed')
            console.error(error)
        }
    })
    /**
     * Return letsencrypt challenge middleware
     */
    return async function middleware(ctx, next){
        if(challengeFilePaths[ctx.url]){
            return ctx.body = challengeFilePaths[ctx.url]
        }

        if(shouldRenewCert() && !renewingCertPromise){
            renewingCertPromise = newCert()
            await renewingCertPromise
            renewingCertPromise = null
        }

        if(renewingCertPromise) await renewingCertPromise
        
        await next()
    }
}