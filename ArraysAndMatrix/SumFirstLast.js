function sumFirstLast(numbers) {
    numbers = numbers.map(Number);
    let sum = numbers[0] + numbers[numbers.length - 1];
    console.log(sum);
}

sumFirstLast(['20', '30', '40']);