/**
 * Prefix array of routes
 */
export function prefix (prefix, routes) {
    return routes.map(route => {
        route.path = prefix + route.path
        return route
    })
}

/**
 * Add meta data to a group of routes
 * 
 * Used for stuff such as router guards
 */
export function meta (meta, routes) {
    return routes.map(route => {
        if(!route.meta) route.meta = {}

        Object.assign(route.meta, meta)
        return route
    })
}

export function group () {
    let routes = []
    let prefixString = ''
    let metaObj = {}
    
    if(arguments.length === 2) {
        if(typeof arguments[0] === 'string') prefixString = arguments[0]
        else if(typeof arguments[0] === 'object') metaObj = arguments[0]
        else throw new Error('Unrecognised argument, should be path prefix or meta object')
        routes = arguments[1]
    }
    if(arguments.length === 3) {
        if(typeof arguments[0] === 'string') prefixString = arguments[0]
        else throw new Error('First argument should be a path prefix string')
        if(typeof arguments[1] === 'object') metaObj = arguments[1]
        else throw new Error('Second argument should be a meta object')
        routes = arguments[2]
    }

    if(!routes || routes.length === 0) throw new Error('No routes provided')

    return prefix(prefixString, meta(metaObj, routes))
}
