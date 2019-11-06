/**
 * Prefix array of routes
 */
export function prefix(prefix, routes){
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
export function meta(meta, routes){
    return routes.map(route => {
        if(!route.meta) route.meta = {}

        Object.assign(route.meta, meta)
        return route
    })
}