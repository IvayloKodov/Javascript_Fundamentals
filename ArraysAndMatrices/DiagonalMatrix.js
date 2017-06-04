function solve(arr) {
    let matrix = [];
    for (let row of arr) {
        let rowArr = row.split(' ');
        matrix.push(rowArr);
    }

    let mainDiagonal = 0;
    let otherDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += Number(matrix[i][i]);
        otherDiagonal += Number(matrix[i][matrix.length - 1 - i]);
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col || col == matrix[row].length - 1 - row) {
                continue;
            }
            matrix[row][col] = mainDiagonal;
        }
    }

    return matrix.map(row => row.join(" ")).join("\n");
}

console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));