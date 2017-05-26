function calendar([day, month, year]) {
    let date
    let html = '<table>\n';
    html+='<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';


    html += '</table>';

    return html;
}

calendar([24, 12, 2012]);