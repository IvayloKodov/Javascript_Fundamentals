function colorfulNumbers(number) {
    let html = '<ul>\n';

    for (let i = 1; i <= number; i++) {
        let color = i % 2 == 0 ? 'blue' : 'green';
        html += `<li><span style=\'color:${color}\'>${i}</span></li>\n`;
    }

    html += '</ul>\n';
    return html;
}

console.log(colorfulNumbers(10));