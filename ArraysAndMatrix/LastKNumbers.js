function lastKNumbers(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let sum = result.slice(start, start + k).reduce((a, b) => a + b, 0);
        result.push(sum);
    }

    return result.join(' ');
}

console.log(lastKNumbers(6, 3));
