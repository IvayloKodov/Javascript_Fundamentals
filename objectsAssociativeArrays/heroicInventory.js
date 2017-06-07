function solve(heroes) {
    let heroesObjs = [];
    for (let heroArgs of heroes) {
        let [name, level, items]=heroArgs.split(' / ').filter(e => e != '');
        items = items != undefined ? items.split(', ').filter(e => e != '') : [];

        let hero = {name: name, level: Number(level), items: items};
        heroesObjs.push(hero);
    }

    return JSON.stringify(heroesObjs);
}

console.log(solve(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));