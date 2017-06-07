function solve(arr) {
    let map = new Map();

    for (let sentence of arr) {
        let words = sentence
            .split(/\W+/)
            .filter(e => e != '')
            .map(w => w.toLowerCase())
            .sort();

        for (let word of words) {
            if (!map.has(word)) {
                map.set(word, 0);
            }

            map.set(word, map.get(word) + 1);
        }
    }
    return [...map].map(([word, count]) => `'${word}' -> ${count} times`).join('\n');
}

console.log(solve(['Far too slow, you\'re far too slow.']));