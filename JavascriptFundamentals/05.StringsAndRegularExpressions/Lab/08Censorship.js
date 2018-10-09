function censore(text, censore) {
    let index = 0;
    let output = '';

    for (let i = 0; i < censore.length; i++) {
        let regex = new RegExp(censore[i], 'g');

        if (text.match(regex)) {
            let startIndex = text.indexOf(censore[i]);
            let endIndex = startIndex + censore[i].length;

            output += text.substring(index, startIndex);
            output += '-'.repeat(endIndex);
            index = endIndex;
        }
    }

    console.log(output);
}

censore('roses are red, violets are blue', [', violets are', 'red']
);