function solve(arr) {
    let products = new Map();

    for (let args of arr) {
        let [town, product, price]= args.split(/\s\|\s/).filter(e => e != '').map(e => e.trim());

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, Number(price));
    }

    for (let [product, townPrice] of products) {
        let [town, price]= [...townPrice].sort(lowestPrice)[0];

        console.log(`${product} -> ${price} (${town})`);
    }

    function lowestPrice(a, b) {
        return a[1] - b[1];
    }
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);