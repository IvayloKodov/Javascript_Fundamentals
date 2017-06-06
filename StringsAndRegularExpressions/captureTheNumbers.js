function solve(arr) {
    let regex = /\d+/g;
    return arr
        .filter(l => l.match(regex))
        .map(l => l.match(regex).join(' '))
        .join(' ');
}

console.log(solve(['123a456',
    '789b987',
    'asd',
    '654c321',
    '0']));