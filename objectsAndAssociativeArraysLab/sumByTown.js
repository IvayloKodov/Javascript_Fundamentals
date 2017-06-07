function solve(input) {
    let towns = {};

    for (let i = 0; i < input.length; i += 2) {
        let [town, income] = [input[i], Number(input[i + 1])];

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += income;
    }

    return JSON.stringify(towns);
}

console.log(solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]));