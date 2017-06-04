function solve(numbers) {
    let biggestNumber = Number.NEGATIVE_INFINITY;
    let result = [];

    for (let number of numbers) {
        if (number >= biggestNumber) {
            biggestNumber = number;
            result.push(number);
        }
    }

    return result.join('\n');
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));