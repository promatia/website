export default function errorToString (error) {
    return `${error.message}${error.location ? ` (${error.location})` : ''}`
}
