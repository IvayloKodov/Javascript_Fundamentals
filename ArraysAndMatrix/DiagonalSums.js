function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let j = 0; j < matrix.length; j++) {
        mainDiagonalSum += matrix[j][j];
        secondaryDiagonalSum += matrix[j][matrix.length - j - 1];
    }

    return mainDiagonalSum + ' ' + secondaryDiagonalSum;
}

console.log(diagonalSums([[20, 40],
    [10, 60]]
));


console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));