import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'

const envFile = readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), '../../env.json'), 'utf-8')

global.ENV = JSON.parse(envFile)
