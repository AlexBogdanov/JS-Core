function printPointPositonInRectangle(data) {
    let x = +data[0];
    let y = +data[1];
    let xMin = +data[2];
    let xMax = +data[3];
    let yMin = +data[4];
    let yMax = +data[5];

    let output = x >= xMin && x <= xMax && y >= yMin && y <= yMax ? 'inside' : 'outside';

    console.log(output);
}