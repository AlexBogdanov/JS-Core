function extractIncreasing(data) {
    let previousNum = -10000000000;
    let output = [];

    for (let i = 0; i < data.length; i++) {
        let currNum = +data[i];

        if (currNum > previousNum) {
            previousNum = currNum;
            output.push(currNum);
        }
    }

    output.forEach(el => console.log(el));
}