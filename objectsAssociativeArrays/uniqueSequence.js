function solve(matrix) {
    let result = new Set();

    matrix
        .map(r => JSON.parse(r))
        .map(r => r.sort((a, b) => b - a))
        .forEach(r => result.add(r.join(', ')));

    result = [...result].sort((a, b) => a.split(', ').length - b.split(', ').length);

    for (let arr of result) {
        console.log('[' + arr + ']');
    }
}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 66]',
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
]);