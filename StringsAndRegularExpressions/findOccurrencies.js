function solve(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    let matches = sentence.match(regex)

    return matches == null ? '0' : matches.length;
}

console.log(solve('The waterfall was so high, that the child couldn’t see its peak.', 'the'));