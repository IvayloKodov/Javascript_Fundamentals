function isPrime(number) {
    let maxValue = Math.sqrt(number);
    let isPrime = true;
    for (let i = 2; i < maxValue; i++) {
        if (number % i == 0) {
            isPrime = false;
            return isPrime;
        }
    }

    return isPrime && number > 1;
}

console.log(isPrime(0));