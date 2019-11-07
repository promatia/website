const acme = require('acme-client')
const fs = require('fs')
const path = require('path')
const os = require('os')
const forge = require('node-forge')

const directoryUrl = acme.directory.letsencrypt[ENV.ssl.mode]
const sslDataPath = path.resolve(os.homedir(), './ssl/')

function writeSSLObject(obj){
    fs.mkdirSync(sslDataPath, { recursive: true })
    fs.writeFileSync(`${sslDataPath}/${ENV.ssl.mode}.json`, JSON.stringify(obj), 'utf8')
}

function readSSLObject(){
    try {
        return JSON.parse(fs.readFileSync(`${sslDataPath}/${ENV.ssl.mode}.json`), 'utf8')
    } catch (error) {
        return {}
    }
}

async function getClient(){
    let opts = {
        directoryUrl
    }

    const sslObject = readSSLObject()

    if(sslObject.accountKey) opts.accountKey = sslObject.accountKey
    if(sslObject.accountUrl) opts.accountUrl = sslObject.accountUrl

    if(!opts.accountKey) opts.accountKey = String((await acme.forge.createPrivateKey()))

    const client = new acme.Client(opts)
    
    try {
        client.getAccountUrl() //check if account exists
    } catch (error) {
        await client.createAccount({
            email: ENV.ssl.email,
            termsOfServiceAgreed: true
        })

        writeSSLObject({...sslObject, accountUrl: client.getAccountUrl(), accountKey: opts.accountKey})
    }

    return { 
        client,
        cert: sslObject.cert,
        key: sslObject.key
    }
}

function getExpiry(cert){
    if(cert) return forge.pki.certificateFromPem(cert).validity.notAfter
}

module.exports = async function ssl(httpServer, http2server){
    let challengeFilePaths = {}
    let renewingCertPromise = null

    let { client, cert, key } = await getClient()
    let expires = getExpiry(cert)

    async function newCert(){
        const [privateKey, csr] = await acme.forge.createCsr({
            commonName: ENV.ssl.domains[0],
            altNames: ENV.ssl.domains
        })

        key = String(privateKey)
        cert = await client.auto({
            csr,
            challengePriority: ['http-01'],
            async challengeCreateFn(authz, challenge, challengeContents) {
                if (challenge.type === 'http-01') {
                    challengeFilePaths[`/.well-known/acme-challenge/${challenge.token}`] = challengeContents
                }
            },
            async challengeRemoveFn(auths, challenge){
                delete challengeFilePaths[`/.well-known/acme-challenge/${challenge.token}`]
            }
        })

        writeSSLObject({...readSSLObject(), key, cert})
        expires = getExpiry(cert)

        http2server.setSecureContext({
            key,
            cert
        })
    }

    function shouldRenewCert(){
        //if there is no renewal date, generate a new cert
        if(!expires) return true

        //check last renewal, and if more than 2 months, renew certificate
        //letsnecrypt certificates expire every 3 months
        let renewAfter = new Date(expires).setMonth(expires.getMonth() - 1)
        let now = new Date()
        
        return now > renewAfter
    }

    httpServer.on('listening', async () => {
        try {
            if(shouldRenewCert()) renewingCertPromise = newCert()

            if(renewingCertPromise){
                await renewingCertPromise
            }else{
                http2server.setSecureContext({
                    key,
                    cert
                })
            }

            http2server.listen(443)
        } catch (error) {
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