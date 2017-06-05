function expressionSplit(expression) {
    let regex = new RegExp(/[\s();,\.]+/);

    return expression.split(regex).join('\n');
}

console.log(expressionSplit('let sum = 4 * 4,b = "wow";'));