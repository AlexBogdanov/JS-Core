function log2x(data) {
    let result = 0;

    for (let j = 0; j < data.length; j++) {
        let num = data[j];

        for (let i= 2; i < 20; i++) {
            if (Math.pow(2, i) === num) {
                result += i;
                break;
            }
        }
    }

    console.log(result);
}