function countWords(data) {
    let pattern = new RegExp('\\w+', 'gm');

    let matched = data[0].match(pattern);
    let outputObj = {};

    matched.forEach(el => {
        if (!outputObj.hasOwnProperty(el)) {
            outputObj[`${el}`] = 1;
        } else {
            outputObj[`${el}`]++;
        }
    })

    console.log(JSON.stringify(outputObj));
}