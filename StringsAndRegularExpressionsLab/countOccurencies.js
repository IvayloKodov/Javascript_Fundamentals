function occurenciesCounter(search, sentence) {
    let counter = 0;

    for (let i = 0; i < sentence.length; i++) {
        let foundOccurency = sentence.substr(i).indexOf(search);
        if (foundOccurency == -1) {
            break;
        }
        i += foundOccurency + 1;
        counter++;
    }

    return counter;
}

console.log(occurenciesCounter('the', 'The quick brown fox jumps over the lay dog.'));