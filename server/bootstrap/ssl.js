const acme = require('acme-client')

module.exports = async function ssl(server){
    let challengeFilePath
    let challengeFileContents
    let renewingCertPromise = null
    let lastRenewal
    
    const client = new acme.Client({
        directoryUrl:  acme.directory.letsencrypt[ENV.ssl.mode],
        accountKey: await acme.forge.createPrivateKey()
    })

    async function newCert(){
        const [key, csr] = await acme.forge.createCsr({
            commonName: ENV.ssl.domains[0],
            altNames: ENV.ssl.domains
        })

        let cert = await client.auto({
            csr,
            email: ENV.ssl.email,
            termsOfServiceAgreed: true,
            async challengeCreateFn(authz, challenge, challengeContents) {
                if (challenge.type === 'http-01') {
                    challengeFilePath = `/.well-known/acme-challenge/${challenge.token}`
                    challengeFileContents = challengeContents
                }
            }
        })

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
    server.on('listening', async () => {
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
        if(ctx.url === challengeFilePath){
            return ctx.body = challengeFileContents
        }
        if(shouldRenewCert() && !renewingCertPromise){
            renewingCertPromise = newCert()
            await renewingCertPromise
            renewingCertPromise = null
        }
        
        await next()
    }
}