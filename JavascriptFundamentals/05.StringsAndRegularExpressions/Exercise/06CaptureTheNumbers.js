function captureNumbers(data) {
    let resultArr = data.map(el => {
        return el.match(/\d+/gm);
    }).filter(el => el);

    let result = [];

    for (let i = 0; i < resultArr.length; i++) {
        let currArr = resultArr[i];

        currArr.forEach(el => {
            if (el) {
                result.push(el);
            }
        })
    }

    console.log(result.join(' '));
}