function solve(arr) {
    let map = new Map();

    for (let townArgs of arr) {
        let [town, population]= townArgs.split(' <-> ').map(e => e.trim());

        if (!map.has(town)) {
            map.set(town, 0);
        }

        map.set(town, map.get(town) + Number(population));
    }

    return [...map]
        .map(([town, population]) => `${town} : ${population}`)
        .join('\n');
}

console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]));