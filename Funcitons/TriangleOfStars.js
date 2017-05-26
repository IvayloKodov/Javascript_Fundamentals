function triangleOfStars(count) {
    let result = '';
    for (let i = 1; i <= count; i++) {
        result += '*'.repeat(i) + '\n';
    }

    for (let j = count - 1; j > 0; j--) {
        result += '*'.repeat(j) + '\n';
    }
    return result;
}

console.log(triangleOfStars(2));