function solve(lines) {
    let key = lines.shift();
    let regex = new RegExp(`(?:\\s|^)(${key})\\s+([!%$#A-Z]{8,})(\\.|,|\\s|$)`, "gi");

    for (let line of lines) {
        let match;

        while (match = regex.exec(line)) {
            let message = match[2];

            if (message.toUpperCase() === message) {
                line = line.substring(0, match.index + key.length) +
                    line.substring(match.index + key.length).replace(message, replacer);
            }
        }

        console.log(line);
    }

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

solve(["hiddenTrap",
    "Now the ultimate hiddenTrap HIDDENTR just some text",
    "who said the message couldn't be contained in the key",
    "or it could be this HIDDENTRAP, HIDDENTRAP HIDDENTRA",
    "some more tests this one is wrong (HIDDENTRAP HIDDENTRA)",
    "now with some spaces HIDDENTRAP         HIDDENTRA  HIDDENTRAP  HIDDENTR",
    "hiddenTrap HiddenTRA, hiddenTrap HIDDENTRA"
]);