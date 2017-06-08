function solve(arr) {
    let bottles = new Map();
    let result = new Map();

    let juices = arr.map(r => r.split(' => ').filter(e => e != ''));

    for (let [juice, quantity] of juices) {
        if (!bottles.has(juice)) {
            bottles.set(juice, 0);
        }

        bottles.set(juice, bottles.get(juice) + Number(quantity));

        if (bottles.get(juice) >= 1000) {
            result.set(juice,Number.parseInt(bottles.get(juice) / 1000));
        }
    }

    return [...result]
        .map(([juice, quantity]) => `${juice} => ${quantity}`)
        .join('\n');
}

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'

]));