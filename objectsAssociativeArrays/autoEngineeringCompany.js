function solve(arr) {
    let company = new Map();

    let cars = arr.map(r => r.split(' | ').filter(e => e != ''));

    for (let [brand, model, quantity] of cars) {
        quantity = Number(quantity);

        if (!company.has(brand)) {
            company.set(brand, new Map());
        }

        if (!company.get(brand).has(model)) {
            company.get(brand).set(model, quantity);
        } else {
            company.get(brand).set(model, company.get(brand).get(model) + quantity);
        }
    }

    for (let [brand, modelQuantity] of company) {
        console.log(brand);

        for (let [model, quantity] of modelQuantity) {
            console.log(`###${model} -> ${quantity}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
