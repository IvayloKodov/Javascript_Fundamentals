function printEveryElement(arr) {
    let step = arr.pop();
    return arr.filter((n, i) => i % step == 0)
        .join('\n');
}

console.log(printEveryElement([1, 2, 3, 4, 5, 6]));
;



