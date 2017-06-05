function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(s => s.toLowerCase())
        .map(s => s[0].toUpperCase() + s.substr(1))
        .join(' ');
}

console.log(capitalizeWords('Capitalize these words'));