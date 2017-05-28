function templateFormat(arr) {
    let template = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>
${getQuestionsAnswersTemplate(arr)}
</quiz>`;

    console.log(template);

    function getQuestionsAnswersTemplate(arr) {
        let result = '';

        for (let i = 0; i < arr.length; i += 2) {
            let questionHtml = `  <question>\n    ${arr[i]}\n  </question>\n`;
            let answerHtml = `  <answer>\n    ${arr[i + 1]}\n  </answer>${i == arr.length - 2 ? '' : '\n'}`;
            result += questionHtml;
            result += answerHtml;
        }

        return result;
    }
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);