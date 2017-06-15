function solve(sections) {
    sections=sections.map(Number);
    let dayConcrete = 195;
    let concretePrice = 1900;
    let dailyConsumes = [];

    while (true) {
        let dailyConcreteConsumes = 0;
        let building = false;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== 30) {
                sections[i] += 1;
                dailyConcreteConsumes += dayConcrete;
                building = true;
            }
        }
        if (!building) {
            break;
        } else {
            dailyConsumes.push(dailyConcreteConsumes);
        }
    }

    let sumConcrete = dailyConsumes.reduce((a, b) => a + b);
    console.log(dailyConsumes.join(', '));
    console.log((sumConcrete * concretePrice) + ' pesos');
}


solve([21, 25, 28]);