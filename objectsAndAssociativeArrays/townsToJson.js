function solve(arr) {
    arr.shift();
    let towns = arr.map(r =>
        r.split('|')
            .filter(a => a != '')
            .map(e => e.trim()))
        .map(e => town = {
            Town: e[0],
            Latitude: Number(e[1]),
            Longitude: Number(e[2])
        });

    return JSON.stringify(towns);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));