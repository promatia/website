const path = require('path')
const fs = require('fs')

const envFile = fs.readFileSync(path.resolve(process.cwd(), '.env.json'), 'utf-8')

global.ENV = JSON.parse(envFile)