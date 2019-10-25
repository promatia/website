const acme = require('acme-client')

module.exports = async function ssl(httpsServer){
    let challengeFilePath
    let challengeFileContents
    let renewingCertPromise = null
    let lastRenewal

    const [privateKey, csr] = await acme.forge.createCsr({
        commonName: ENV.sslDomains[0],
        altNames: ENV.sslDomains
    })
    
    const client = new acme.Client({
        directoryUrl: ENV.sslProduction ? acme.directory.letsencrypt.production : acme.directory.letsencrypt.staging,
        accountKey: privateKey
    })

    async function newCert(){
        let cert = await client.auto({
            csr: csr.toString(),
            email: ENV.sslEmail,
            termsOfServiceAgreed: true,
            async challengeCreateFn(authz, challenge, challengeContents) {
                if (challenge.type === 'http-01') {
                    challengeFilePath = `/.well-known/acme-challenge/${challenge.token}`
                    challengeFileContents = challengeContents
                }
            }
        })

        lastRenewal = new Date()
        
        console.log(cert)

        httpsServer.setSecureContext({
            key: privateKey,
            cert
        })

        renewingCertPromise = null
    }

    function shouldRenewCert(){
        //if there is no renewal date, generate a new cert
        if(!lastRenewal) return true

        //check last renewal, and if more than 2 months, renew certificate
        //letsnecrypt certificates expire every 3 months
        return new Date() < lastRenewal.setMonth(date.getMonth() + 2)
    }

    /**
     * Return letsencrypt challenge middleware
     */
    return async (ctx, next) => {
        if(ctx.url === challengeFilePath){
            return ctx.body = challengeFileContents
        }
        if(renewingCertPromise){
            await renewingCertPromise
        }else{
            if(shouldRenewCert()){
                renewingCertPromise = newCert()
                await renewingCertPromise
            }
        }
        
        await next()
    }
}