function solve(arr) {
    arr = arr.filter(e => e != '');
    let key = arr.shift();
    arr = arr.join('\n');

    let keyRegex = new RegExp(`(?:\\s||^)${key}\\s+`, "gi");
    let keyMatch = keyRegex.exec(arr);

    let keyVariables = new Set();
    while (keyMatch) {
        keyVariables.add(keyMatch[0]);

        keyMatch = keyRegex.exec(arr);
    }
    keyVariables = [...keyVariables].map(e => e.trim()).join('||');

    let regex = new RegExp(`(?:\\s|^)(${keyVariables})\\s+([!%$#A-Z]{8,})(\\.|,|\\s|$)`, "g");

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

solve([ "tricky",
        "And now the tricky tests",
        "Tricky CAREFULL!#$%; with what you decode Tricky CAREFULL!#$%",
        "Tricky HERECOMESDASH- with what you decode Tricky HERECOMESDASH -",
        "Try again stricky NOTTHEFIRSTONE  tricky NOTTHEFIRSTONE",
        "Be very carefull now trICkY plainwrong, trICkY PLAINWRONG",
        "next challenge (tRickY SOME$WORDS) tRickY SOME$WORDS",
        "It's tricky TOUSETHECORRECTREPLACE? tricky TOUSETHECORRECTREPLACE ,",
        "now with commas triCky RAND!$OM%$#TE!#XT, triCky RAND!$OM%$#TE!#XT.",
        "DON'T match this plz TRICKY | TEXT#TEXT. TRICKY  TEXT#TEXT.",
        "Try with commas -triCkY COMMAHERE, triCkY COMMAHERE, wow"
]);