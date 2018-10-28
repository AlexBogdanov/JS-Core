function aggregates(data) {
    let min = Number.MAX_VALUE;
    let sum = data.reduce((acc, num) => {
        if (num < min) {
            min = num;
        }

        return acc + num;
    }, 0);

    let max = Number.MIN_VALUE;
    let joined = data.reduce((acc, num) => {
        if (num > max) {
            max = num;
        }

        return acc + num;
    }, '');

    let product = data.reduce((num1, num2) => {
        return num1 * num2;
    });

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${joined}`);
}