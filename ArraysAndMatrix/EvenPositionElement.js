function evenPositions(numbers) {
    let result = [];
    for (i = 0; i < numbers.length; i += 2) {
        result.push(numbers[i]);
    }

    console.log(result.join(' '));
}

evenPositions(['5', '10']);