function radioCrystals(input) {
    let finalTickness = input[0];

    let cut = (a) => a / 4;
    let lap = (a) => a * 0.8;
    let grind = (a) => a - 20;
    let etch = (a) => a - 2;

    //Called once
    let xray = (a) => a + 1;

    //Called after eaach operation
    let transportAndWashing = (a) => parseInt(a);

    let operations = [cut, lap, grind, etch, xray];

    for (i = 1; i < input.length; i++) {
        let tickness = input[i];
        let operationCounter = 0;
        let counter = 0;
        let isXrayed = false;

        console.log(`Processing chunk ${tickness} microns`);

        while (tickness >= finalTickness) {
            if (operations[operationCounter](tickness) > finalTickness) {
                tickness = operations[operationCounter](tickness);
                counter++;
            } else if (operations[operationCounter](tickness) == finalTickness || tickness==finalTickness) {
                console.log(capitalizeFirstLetter(operations[operationCounter].name) + ` x${counter + 1}`);
                console.log('Transporting and washing');
                break;
            }
            else {
                if (tickness - 1 == finalTickness) {
                    counter++;
                    tickness -= 1;
                    isXrayed = true;
                }

                console.log(capitalizeFirstLetter(operations[operationCounter].name) + ' x' + counter);
                console.log('Transporting and washing');
                tickness = transportAndWashing(tickness);
                operationCounter++;
                counter = 0;
            }
        }

        if (isXrayed) console.log('X-ray x1');

        console.log(`Finished crystal ${finalTickness} microns`);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

radioCrystals([1000, 4000, 8100]);