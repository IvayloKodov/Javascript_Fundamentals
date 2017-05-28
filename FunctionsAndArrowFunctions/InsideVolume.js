function solve(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        console.log(isInside(arr[i], arr[i + 1], arr[i + 2]));;
    }

    function isInside(x,y,z) {
        let [xMin, yMin, zMin, xMax, yMax, zMax]=[10, 20, 15, 50, 80, 50];
        let isInside = x >= xMin && x <= xMax &&
            y >= yMin && y <= yMax &&
            z >= zMin && z <= zMax;

        return !isInside ? 'outside' : 'inside';
    }
}

solve([13.1, 50, 31.5,50, 80, 50,-5, 18, 43]);