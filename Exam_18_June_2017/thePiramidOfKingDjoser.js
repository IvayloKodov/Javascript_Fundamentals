function solve(base, increment) {
    let stepReduceBlock = 2;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let steps = 1;
    while (base > 2) {
        stone += Math.pow(base - 2, 2) * increment;
        let current = ((4 * base) - 4) * increment;

        if (steps % 5 === 0) {
            lapis += current;
        } else {
            marble += current;
        }

        base -= stepReduceBlock;
        steps++;
    }

    gold += (base * base)*increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}

solve(12, 1);