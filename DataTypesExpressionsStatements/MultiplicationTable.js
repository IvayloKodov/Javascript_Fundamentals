function multiplicationTable(n) {
    let html = '<table border="1">\n';

    for (let row = 0; row <= n; row++) {
        html += '<tr>';
        for (col = 1; col <= n; col++) {
            if (row == 0) {
                if (col == 1) {
                    html += '<th>x</th>';
                }

                html += `<th>${col}</th>`;
            } else {
                if (col == 1) {
                    html += `<th>${row}</th>`;
                }

                html += `<td>${row * col}</td>`;
            }
        }
        html += '</tr>\n';
    }
    html += '</table>';

    console.log(html);
}

multiplicationTable(3)