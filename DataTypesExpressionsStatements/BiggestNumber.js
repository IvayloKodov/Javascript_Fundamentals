function biggestNumber(numbers) {
    //let biggest= Math.max.apply(Math,numbers);
    let biggest = numbers[0];
    for (let number of numbers) {
        if (number > biggest) {
            biggest = number;
        }
    }

    console.log(biggest);
}

biggestNumber([5, -2, 7]);