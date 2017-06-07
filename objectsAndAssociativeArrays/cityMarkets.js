function solve(arr) {
    let cityMarkets = new Map();

    for (let args of arr) {
        let [town, product, sales] = args.split(' -> ').filter(e => e != '').map(e => e.trim());

        if (!cityMarkets.has(town)) {
            cityMarkets.set(town, new Map());
        }

        if (!cityMarkets.get(town).has(product)) {
            cityMarkets.get(town).set(product, 0);
        }

        let oldSales = cityMarkets.get(town).get(product);
        sales = sales.split(' : ').reduce((a, b) => a * b);
        cityMarkets.get(town).set(product, oldSales + sales)
    }

    let result = '';
    for (let [town, products] of cityMarkets) {
        result += `Town - ${town}\n`;

        for (let [product, sales] of products) {
            result += `$$$${product} : ${sales}\n`
        }
    }

    return result;
}

console.log(solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]));