function solve(sentence, delimeter) {
    return sentence
        .split(delimeter)
        .join('\n');
}

console.log(solve('One-Two-Three-Four-Five', '-'));