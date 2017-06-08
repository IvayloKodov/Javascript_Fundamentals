function solve(jsonArr) {
    let employees = jsonArr.map(r => JSON.parse(r));

    let html = '<table>\n';

    for (let employee of employees) {
        html += '    <tr>\n';
        html += `        <td>${htmlEscape(employee.name)}</td>\n`;
        html += `        <td>${htmlEscape(employee.position)}</td>\n`;
        html += `        <td>${employee.salary}</td>\n`;
        html += '    <tr>\n'
    }

    html += '</table>';

    return html;

    function htmlEscape(text) {
        text = text.toString();
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));