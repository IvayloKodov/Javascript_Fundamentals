function orbit([width, height, x, y]) {
    let matrix = [];
    for (let row = 0; row < height; row++) {
        matrix.push([]);
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    return matrix.map(row => row.join(" ")).join("\n");
}

console.log(orbit([4, 4, 0, 0]));