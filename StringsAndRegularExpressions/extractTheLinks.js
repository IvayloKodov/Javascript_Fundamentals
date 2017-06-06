function solve(sentences) {
    let regex = /www\.([A-Za-z0-9-]+)(\.[a-z]+)+/g;
    let matches = sentences.join(' ').match(regex);
    return matches == null ? '' : matches.join('\n');
}

console.log(solve(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]));