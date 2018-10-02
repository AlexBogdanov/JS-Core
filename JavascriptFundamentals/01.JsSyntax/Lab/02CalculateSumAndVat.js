function calculateAndSumVat(data) {
    let sum = 0;

    for (let num of data) {
        sum += num;
    }

    let vat = sum * 0.20;

    console.log('sum = ' + sum);
    console.log('VAT = ' + vat);
    console.log('total = ' + (vat + sum));
}