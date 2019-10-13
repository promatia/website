const acme = require('acme-client')
const koa = require('koa')

async function startServer(){
    let app = new koa()
    
    let challengeFilePath
    let challengeFileContents

    app.use((ctx, next) => {
        if(ctx.url === challengeFilePath){
            return ctx.body = challengeFileContents
        }
    })

    app.listen(80)

    const [key, csr] = await acme.forge.createCsr({
        commonName: 'test.promatia.com',
    })
    
    const client = new acme.Client({
        directoryUrl: acme.directory.letsencrypt.staging,
        accountKey: await acme.forge.createPrivateKey()
    });

    
    /* Register account */
    const cert = await client.auto({
        csr,
        email: 'albert@marketingx.com.au',
        termsOfServiceAgreed: true,
        async challengeCreateFn(authz, challenge, keyAuthorization) {
            if (challenge.type === 'http-01') {
                challengeFilePath = `/.well-known/acme-challenge/${challenge.token}`
                challengeFileContents = keyAuthorization
            }
        }
    })

    console.log('successful')

    console.log(cert)
}

startServer()
