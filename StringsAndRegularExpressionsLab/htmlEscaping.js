function htmlEscaping(arr) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let sb = [];
    sb.push('<ul>')

    for (let text of arr) {
        sb.push(`<li>${text.htmlEscape()}</li>`);
    }
    sb.push('</ul>')

    return sb.join('\n');
}

console.log(htmlEscaping(['<b>unescaped text</b>', 'normal text']));