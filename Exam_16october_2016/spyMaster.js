function solve(arr) {
    let key = arr.shift();
    arr = arr.join('\n');

    //Make key sense insensitive, etc. to lower()
    let keyRegex = new RegExp(`(?:\\s|^)${key}\\s+`, "gi");
    let keyMatch = keyRegex.exec(arr);

    let keyVariables = new Set();
    while (keyMatch) {
        keyVariables.add(keyMatch[0]);

        keyMatch = keyRegex.exec(arr);
    }
    keyVariables = [...keyVariables].map(e=>e.trim()).join('|');

    let regex = new RegExp(`(?:\\s|^)(${keyVariables})\\s+([!%$#A-Z]{8,})(?=\\.|,|\\s|$)`, "g");

    let match = regex.exec(arr);

    while (match) {
        let message = match[2];
        arr = arr.replace(message, replacer)

        match = regex.exec(arr);
    }

    console.log(arr)

    function replacer(match) {
        match = match
            .toLowerCase()
            .replace(/!/g, "1")
            .replace(/%/g, "2")
            .replace(/#/g, "3")
            .replace(/\$/g, "4");

        return match;
    }
}

solve(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);