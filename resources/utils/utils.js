export function setCookie (name, value) {
    document.cookie = `${name}=${value};path=/;`
}

export function getCookie (cname) {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

export function getQuery (name) {
    if(!global.window) throw new Error('Cannot get query on server')
    let { search } = window.location
    let queryObj = Object.fromEntries(search
        .substr(1, search.length - 1)
        .split('&')
        .map(val => val.split('=').map(val => decodeURI(val)))
    )
    return queryObj[name]
}
