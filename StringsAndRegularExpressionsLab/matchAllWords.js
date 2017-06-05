function matchAllWords(sentence) {
    return sentence.split(/\W+/).filter(x=> x != "").join('|');
}

console.log(matchAllWords('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !'));;