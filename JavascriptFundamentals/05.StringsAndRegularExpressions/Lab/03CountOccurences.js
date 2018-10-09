function countOccurences(keyWord, text) {
    keyWord = keyWord;
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        let currStr = '';

        for (let j = i; j < keyWord.length + i; j++) {
            currStr += text[j];
        }

        if (currStr === keyWord)
            counter++
    }

    console.log(counter);
}