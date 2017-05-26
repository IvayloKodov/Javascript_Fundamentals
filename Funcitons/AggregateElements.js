function aggregateElements(elements) {
    let sum = (a, b) => a + b;
    let inverseSum = (a, b) => a + 1 / b;
    let concatenate = (a, b) => a + b;

    console.log(aggregate(elements, 0, sum));
    console.log(aggregate(elements, 0, inverseSum));
    console.log(aggregate(elements, '', concatenate));

    function aggregate(arr, initValue, func) {
        let result = initValue;
        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i]);
        }

        return result;
    }
}

aggregateElements([1, 2, 3]);