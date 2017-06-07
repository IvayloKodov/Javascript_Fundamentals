function solve(arr) {
    let counts = {};

    for (let sentence of arr) {
        let words = sentence.split(/\W+/).filter(e => e != '');

        for (let word of words) {
            if (!counts.hasOwnProperty(word)) {
                counts[word] = 0;
            }

            counts[word]++;
        }
    }
    return JSON.stringify(counts);
}

console.log(solve(['Far too slow, you\'re far too slow.']));