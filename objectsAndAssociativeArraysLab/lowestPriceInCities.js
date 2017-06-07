function solve(arr) {
    let products = new Map();

    for (let args of arr) {
        let [town, product, price]= args.split(' | ').filter(e => e != '').map(e => e.trim());

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        if (!products.get(product).has(town)) {
            products.get(product).set(town, price)
        }

        let currentPrice = products.get(product).get(town);
        if (currentPrice < price) {
            products.get(product).set(town, price)
        }
    }
    let sorted = new Map([...products].sort(function (product, townPrice) {
        let [town, price]=townPrice;
        
    }));
    console.log(sorted);
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'Sample Town | Sample Product | 900',
    'New York | Sample Product | 1000.1',
    'New Yorkee | Sample Product | 800',
    'New York | Burger | 10'
]);