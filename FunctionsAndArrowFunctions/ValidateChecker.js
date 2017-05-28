function validateChecker([x1, y1, x2, y2]) {

    print(x1, y1, 0, 0);
    print(x2, y2, 0, 0);
    print(x1, y1, x2, y2);

    function distance(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    }

    function print(x1, y1, x2, y2) {
        let validation = Number.isInteger(distance(x1, y1, x2, y2)) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validation}`);
    }
}

validateChecker([2, 1, 1, 1]);