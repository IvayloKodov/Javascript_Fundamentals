function solve(arr) {

    let newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        }
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        }
    }
    for (let obj of newArr) {
        console.log(obj);
    }
}

solve([3, -2, 0, -1]);