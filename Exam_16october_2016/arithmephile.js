function solve(numbers) {
    numbers = numbers.map(Number);
    let sequences = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number >= 0 && number <= 9) {
            let array = numbers.slice(i + 1, i + number + 1);
            let sequenceMultiplication = array.length == 0 ? 0 : array.reduce((a, b) => a * b);
            sequences.push(sequenceMultiplication);
        }
    }

    console.log(Math.max.apply(null, sequences));
}

solve(['100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1']);
