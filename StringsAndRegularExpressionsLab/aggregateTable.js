function aggregateTable(arr) {
    arr = arr.map(e => e.split('|').filter(w => w != '').map(a => a.trim()));
    let towns = arr.map(e => e[0]).join(', ');
    let income = arr.map(e => Number(e[1])).reduce((a, b) => a + b);

    console.log(towns);
    console.log(income);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);
