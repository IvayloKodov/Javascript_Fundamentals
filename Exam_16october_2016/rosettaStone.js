function solve(arr) {
    arr = arr.map(s => s.split(' ').map(Number));

    let templateLength = Number(arr.shift());
    let templateMatrix = arr.splice(0, templateLength);
    let message = arr;

    for (let row = 0; row < message.length; row++) {
        let templateRow = templateMatrix[row % templateLength];

        for (let col = 0; col < message[row].length; col++) {
            let templateCell = templateRow[col % templateRow.length];

            let decodedLetter = templateCell + message[row][col];
            message[row][col] = decode(decodedLetter);
        }
    }

    console.log(message.map(r => r.reduce((a, b) => a + b)).reduce((a, b) => a + b));

    function decode(letter) {
        letter = letter % 27;
        var chr = letter == 0 ? ' ' : String.fromCharCode(64 + letter);
        return chr;
    }
}

solve([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]
);