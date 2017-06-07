function solve(json) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let html = '<table>\n';
    html += '<tr><th>name</th><th>score</th></tr>\n'
    let scores = JSON.parse(json);


    for (let score of scores) {
        html += '<tr>';
        html += `<td>${score.name.htmlEscape()}</td>`;
        html += `<td>${score.score}</td>`;
        html += '</tr>\n';
    }

    html += '</table>'

    return html;
}

console.log(solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));