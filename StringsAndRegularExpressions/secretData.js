function solve(sentences) {
    let nameRegex = /\*[A-Z]{1}[a-zA-Z]*(?=\s|$)/g;
    let phoneRegex = /\+[0-9\-]{10}(?=\s|$)/g;
    let idsRegex = /![a-zA-Z0-9]+(?=\s|$)/g;
    let baseRegex = /_[a-zA-Z0-9]+(?=\s|$)/g;

    for (let sentence of sentences) {
        sentence = sentence.replace(nameRegex,replacer);
        sentence = sentence.replace(phoneRegex, replacer);
        sentence = sentence.replace(idsRegex, replacer);
        sentence = sentence.replace(baseRegex, replacer);

        console.log(sentence);
    }

    function replacer(match) {
        return "|".repeat(match.length)
    }
}

console.log(solve(['Agent *Ivan  +555-49-796 was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796 +555-49-796 +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'
]));