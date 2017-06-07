function solve(arr) {
    function htmlEscape(text) {
        text = text.toString();
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let products = JSON.parse(arr);
    let html = '<table>\n';

    //Headers
    let productsKeys = Object.keys(products[0]);
    html += '   <tr>';
    for (let key of productsKeys) {
        html += `<th>${htmlEscape(key)}</th>`
    }
    html += '</tr>\n';

    for (let product of products) {
        html += '   <tr>';

        for (let key of productsKeys) {
            html += `<td>${htmlEscape(product[key])}</td>`;
        }

        html += '</tr>\n';
    }

    html += '</table>';
    return html;
}

console.log(solve('[{"Name":"Tomatoes & Chips","Price":"2.35"},{"Name":"J&B Chocolate","Price":"0.96"}]'));