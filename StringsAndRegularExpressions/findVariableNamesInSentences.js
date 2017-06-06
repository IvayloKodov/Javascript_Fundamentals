function solve(sentence) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let match = regex.exec(sentence);
    let result =[];
    while (match){
        result.push(match[1]);
        match=regex.exec(sentence);
    }
    return result.join(',');
}

console.log(solve('__invalidVariable evenMoreInvalidVariable_ _validVariable'));