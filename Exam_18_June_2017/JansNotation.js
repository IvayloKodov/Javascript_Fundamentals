function solve(instructions) {
    let numbers = [];
    let isBreaked = false;

    for (let instruction of instructions) {

        if (Number.isInteger(instruction)) {
            numbers.push(instruction);
        } else {
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                isBreaked = true;
                break;
            }

            let [first, second] = numbers.splice(numbers.length - 2, 2);
            let result = operation(instruction, first, second);
            numbers.push(result);
        }
    }

    if (!isBreaked) {
        if (numbers.length == 1) {
            console.log(numbers[0])
        }
        else {
            console.log('Error: too many operands!');
        }
    }

    function operation(sign, first, second) {
        switch (sign) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '/':
                return first / second;
            case '*':
                return first * second;
        }
    }
}

solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']


);