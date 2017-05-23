function oddOrEven(number) {
    if (number % 2 == 0) {
        return 'even';
    } else if (number != Math.round(number)) {
        return 'invalid';
    } else {
        return 'odd';
    }
}

console.log(oddOrEven(1.5));