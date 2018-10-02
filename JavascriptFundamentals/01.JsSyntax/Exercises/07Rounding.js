function roundANum(data) {
    let num = +data[0];
    let precision = +data[1];

    if (precision > 15)
        precision = 15;

    let output = num.toFixed(precision);

    console.log(+output);
}