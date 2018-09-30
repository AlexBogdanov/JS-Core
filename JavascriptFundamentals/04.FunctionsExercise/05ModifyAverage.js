function modifyNum(input) {
    let num = +input
    let numStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        sum += +numStr[i];
    }

    let averageSum = sum / numStr.length;

    while (averageSum <= 5) {
        numStr += '9';
        sum = 0;

        for (let i = 0; i < numStr.length; i++) {
            sum += +numStr[i];
        }

        averageSum = sum / numStr.length;
    }

    console.log(+numStr);
}