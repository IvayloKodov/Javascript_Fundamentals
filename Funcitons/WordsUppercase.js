function wordsSplitter(sentence) {
    let words = sentence
        .split(/\W+/)
        .filter(w => w != '')
        .map(w => w.toUpperCase());

    return words.join(', ');
}

console.log(wordsSplitter('Hi, how are you?'));