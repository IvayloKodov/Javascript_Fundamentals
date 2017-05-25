function distance3d(arr) {
    let [x1, y1, z1, x2, y2, z2] = arr;

    let distance = Math.sqrt(Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2) +
        Math.pow(z2 - z1, 2))

    console.log(distance)
}

distance3d([3.5, 0, 1, 0, 2, -1]);