function magicMatrix(data) {
    let magic = false;
    let lastSum = -1;

    for (let row = 0; row < data.length; row++) {
        let currSum = 0;

        for (let col = 0; col < data[row].length; col++) {
            currSum += data[row][col];
        }

        if (row === 0) {
            lastSum = currSum;
        } else {
            if (lastSum === currSum) {
                magic = true;
            } else {
                magic = false;
                break;
            }
        }
    }

    console.log(magic);
}