function sumDiagonals(data) {
    let firstDiagonalSum = 0;
    let result = [];

    for (let row = 0; row < data.length; row++) {
        firstDiagonalSum += +data[row][row];
    }

    result.push(firstDiagonalSum);

    let secondDiagonalSum = 0;

    for (let row = 0; row < data.length; row++) {
        secondDiagonalSum += +data[row][data.length - 1 - row];
    }

    result.push(secondDiagonalSum);
    
    console.log(result.join(' '));
}