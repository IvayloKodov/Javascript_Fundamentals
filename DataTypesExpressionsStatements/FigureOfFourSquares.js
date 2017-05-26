function figure4Squares(n) {
    let lines = n % 2 == 0 ? n - 1 : n;
    let figure = '';

    for (let line = 1; line <= lines; line++) {
        if (line == 1 || line == lines || line == Math.ceil(lines / 2)) {
            figure += '+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+' + '\n';
        } else {
            figure += '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|' + '\n';
        }
    }

    console.log(figure);
}

figure4Squares(7);