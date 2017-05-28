function cookingByNumbers(arr) {
    let number = Number(arr[0]);
    let chop = (a) => a / 2;
    let dice = (a) => Math.sqrt(a);
    let spice = (a) => a + 1;
    let bake = (a) => a * 3;
    let fillet = (a) => a * 0.8;

    let currentNumber = number;

    for (let i = 1; i < arr.length; i++) {
        let operation = getOperation(arr[i]);
        currentNumber = execute(currentNumber,operation);
        console.log(currentNumber);
    }

    function execute(element, func) {
        return func(element);
    }

    function getOperation(operation) {
        switch (operation) {
            case 'chop':
                return chop;
            case 'dice':
                return dice;
            case 'spice':
                return spice;
            case 'bake':
                return bake;
            case 'fillet':
                return fillet;
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);