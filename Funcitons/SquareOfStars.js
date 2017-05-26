function squareOfStars(count = 5) {
    function lineGenerator(n) {
        return '*'+' *'.repeat(n-1);
    }

    for (let i = 0; i < count; i++) {
        console.log(lineGenerator(count));
    }
}

squareOfStars(2);