function matchMultiplication(sentence) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+\.*\d*)/g;
    return sentence.replace(regex, multiply);

    function multiply(match, firstNumber, secondNumber) {
        return Number(firstNumber) * secondNumber;
    }
}

console.log(matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));