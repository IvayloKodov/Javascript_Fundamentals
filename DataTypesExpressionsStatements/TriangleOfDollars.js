function triangleOfDollars(rows) {
    for (let row = 1; row <= rows; row++) {
        let line = '';
        for (let col = 1; col <= row; col++) {
            line += "$";
        }
        console.log(line);
    }
}

triangleOfDollars(3);