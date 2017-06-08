function solve(arr) {
    let catalogue = new Map();
    let products = arr.map(r => r.split(' : ').filter(e => e != ''));

    for (let [product, price] of products) {
        let letter = product[0];

        if (!catalogue.has(letter)) {
            catalogue.set(letter, new Map());
        }

        catalogue.set(letter, catalogue.get(letter).set(product, price));
    }

    for (let [letter, products] of [...catalogue.entries()].sort()) {
        console.log(`${letter}`);

        for (let [product, price] of [...products].sort()) {
            console.log(`  ${product}: ${price}`);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);