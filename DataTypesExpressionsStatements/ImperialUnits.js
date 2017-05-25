function imperialUnits(number) {
    let feet = parseInt(number / 12);
    let inches = number % 12;
    console.log(`${feet}'-${inches}"`)
}

imperialUnits(55);