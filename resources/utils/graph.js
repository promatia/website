import axios from 'axios'

export default async function graph (strings, ...variables) {
    let query = handleVariables(strings, variables)
    let config = {}
    
    const { domain, token } = $state.ENV
    
    if(!domain) throw new Error('No domain provided')
    if(token) config.headers = { token }

    let { data } = await axios.post(`${domain}/graph/`, {
        query
    }, config)

    return data
}

function isPrimitive (test) {
    return (test !== Object(test))
}

function isArray (test) {
    return Array.isArray(test)
}

function isObject (test) {
    return typeof test === 'object' && !Array.isArray(test)
}

function parseArray (array) {
    return '[' + array.map(variable => parseVariable(variable)).join(',\n') + ']'
}

function parseObject (obj) {
    return '{\n' + Object.keys(obj).map(key => key + ': ' + parseVariable(obj[key])).join(',\n') + '\n}'
}

function parseVariable (variable) {
    if (isPrimitive(variable)) {
        return JSON.stringify(variable)
    }
    if (isArray(variable)) {
        return parseArray(variable)
    }
    if (isObject(variable)) {
        return parseObject(variable)
    }
    throw new Error('Could not translate: ' + variable)
}

function handleVariables (strings, variables) {
    let query = ''
    
    for (let index in strings) {
        query += strings[index]
        let obj = variables[index]
        if (obj) query += Object.keys(obj).filter(key => obj[key] !== undefined).map(key => key + ': ' + parseVariable(obj[key])).join(',\n')
    }

    return query
}
