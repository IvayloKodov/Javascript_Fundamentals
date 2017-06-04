function extractText(sentence) {
    let result = [];
    let open = sentence.indexOf('(');

    while (open != -1) {
        let close = sentence.indexOf(')', open);

        if (close == -1) {
            break;
        }

        let extract = sentence.substring(open + 1, close);
        result.push(extract);
        open = sentence.indexOf('(', close);
    }

    return result.join(', ');
}

console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));