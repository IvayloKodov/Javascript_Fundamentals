function solve(sentence) {
    sentence = sentence[0];

    sentence = sentence.replace(/([.,!?:;])\s*/g, (m,gr1) => gr1 + " ");
    sentence = sentence.replace(/\s+([.,!?:;])/g, (m, gr1) => gr1);
    sentence = sentence.replace(/\.\s*\.\s*\.\s*!/g, m => "...!");
    sentence = sentence.replace(/\.\s+\d+/g, m => m.replace(/\s/g, ''));
    sentence = sentence.replace(/"([^"]+)"/g, (match, gr1) => `"${gr1.trim()}"`);

    console.log(sentence);
}

solve(['Terribly formatted text .With chaotic spacings." Terrible quoting "! ' +
'Also this date is pretty confusing : 20 . 12. 16 . . . . !']);