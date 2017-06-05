function matchDate(input) {
    let regex = /\b(\d{1,2})-([A-Z]{1}[a-z]{2})-(\d{4}\b)/g;
    let result = [];
    for (let line of input) {
        while (match = regex.exec(line)){
            result.push(match[0]);
        }
    }
    for (let date of result  ) {
        let current = date.split("-")
        console.log(`${date} (Day: ${current[0]}, Month: ${current[1]}, Year: ${current[2]})`)
    }

}

console.log(matchDates(['1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.'
]));