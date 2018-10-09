function extractWords(data) {
    let uniqueWords = [];

    data.forEach(sentence => {
        let sentenceWords = sentence.split(/[\W]+/gm)
            .filter(word => {return word;})
            .map(word => {return word.trim();})
            .map(word => {return word.toLowerCase();});

        sentenceWords.forEach(word => {
           if (!uniqueWords.includes(word)) {
               uniqueWords.push(word);
           }
        });
    })

    console.log(uniqueWords.join(', '));
}