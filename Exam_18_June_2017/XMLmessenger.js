function solve(sentence) {
    let regex = /^<message(\s+([a-z]+)="([A-Za-z0-9. ]+)")+>([\s\S]+)<\/message>$/;

    let toExists = sentence.indexOf(' to="') != -1 ? true : false;
    let fromExists = sentence.indexOf(' from="') != -1 ? true : false;

    if (!toExists || !fromExists) {
        console.log('Missing attributes');
    } else {
        let match = regex.test(sentence);
        if (!match) {
            console.log('Invalid message format');
            return;
        }

        let toRegex = /to="(.+?)"/;
        let fromRegex = /from="(.+?)"/;
        let messageRegex = /<message.+>([\s\S]+)<\/message>/;

        let to = toRegex.exec(sentence)[1];
        let from = fromRegex.exec(sentence)[1];
        let message = messageRegex.exec(sentence)[1];

        let html = '<article>\n';
        html += `  <div>From: <span class="sender">${from}</span></div>\n`;
        html += `  <div>To: <span class="recipient">${to}</span></div>\n`;

        html += '  <div>\n';

        let paragraphs = message.split('\n').filter(e=>e!='');

        for(let paragraph of paragraphs){
            html += `    <p>${paragraph}</p>\n`;
        }

        html += '  </div>\n';
        html += '</article>';

        console.log(html);
    }
}


solve('<message to="Bob" from="Alice" timestamp="1497254092">Hey\n man, what\'s up?</message>');