function dnaHelix(number) {
    let symbols = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let format1 = (a) => `**${a}**`;
    let format2 = (a) => `*${a[0]}--${a[1]}*`;
    let format3 = (a) => `${a[0]}----${a[1]}`;

    let formats = [format1, format2, format3, format2];
    let execute = (a, func) => func(a);

    for(i=0;i<number;i++){
        let result = execute(symbols[i % symbols.length],
            formats[i % formats.length]);
        console.log(result);
    }
}

dnaHelix(4);