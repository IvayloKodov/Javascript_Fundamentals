function modifyAverage(number) {
    while (true) {
        let breaker = average(number);
        if (breaker > 5) break;
        number += '9';
    }

    console.log(number);

    function average(number) {
        number = number.toString();
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }

        return sum / number.length;
    }
}

modifyAverage(5835);