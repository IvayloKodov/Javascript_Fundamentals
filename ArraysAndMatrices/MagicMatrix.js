function magicMatrix(matrix) {
    let sum = rowSum(matrix[0]);
    let isMagic = true;

    //check rows
    for (let i = 0; i < matrix.length; i++) {
        if (sum != rowSum(matrix[i])) {
            isMagic = false;
            break;
        }

        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }

        if (colSum != sum) {
            isMagic = false;
            break;
        }
    }

    return isMagic;

    function rowSum(arr) {
        return arr.reduce((a, b) => a + b);
    }
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]

));
