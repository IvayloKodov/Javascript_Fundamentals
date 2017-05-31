function solve(numbers) {
    let k = numbers.shift();

    console.log(numbers.slice(0, k).join(' '));
    console.log(numbers.slice(-k).join(' '));
}

solve([2, 7, 8, 9]);
solve([3,6, 7, 8, 9]);