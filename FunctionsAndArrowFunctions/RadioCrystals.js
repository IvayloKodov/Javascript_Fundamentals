//Not finished

function radioCrystals([finalTickness, tickness]) {
    let cut = (a) => a / 4;
    let lap = (a) => a * 0.8;
    let grind = (a) => a - 20;
    let etch = (a) => a - 2;

    //Called once
    let xray = (a) => a + 1;

    //Called after eaach operation
    let transportAndWashing = (a) => Math.floor(a);

    let operations = [cut, lap, grind, etch];

    console.log(`Processing chunk ${tickness} microns`);

    //Logic here


    console.log(`Finished crystal ${finalTickness} microns`);
}

radioCrystals([1375, 50000]);