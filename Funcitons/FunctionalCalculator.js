function functionalCalculator(a, b, operator) {
    function getResult(a, b, func) {
        return func(a, b);
    }

    let sum = (a, b) => a + b;
    let divide = (a, b) => a / b;
    let product = (a, b) => a * b;
    let subtract = (a, b) => a - b;

    switch (operator) {
        case '+':
            return getResult(a, b, sum);
        case '-':
            return getResult(a, b, subtract);
        case '*':
            return getResult(a, b, product);
        case '/':
            return getResult(a, b, divide);
    }
}

console.log(functionalCalculator(2, 4, '/'));
