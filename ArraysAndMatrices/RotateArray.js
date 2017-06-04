function rotate(arr) {
    let rotations = arr.pop();

    for (let rotation = 0; rotation < rotations % arr.length; rotation++) {
        let lastElement = arr.pop();

        arr.unshift(lastElement);
    }

    return arr.join(' ');
}

console.log(rotate([1, 2, 3, 4, 2]));