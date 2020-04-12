export function monthDiff(d1, d2) {
    var months
    months = (d2.getFullYear() - d1.getFullYear()) * 12
    months -= d1.getMonth() + 1
    months += d2.getMonth()
    return months <= 0 ? 0 : months
}