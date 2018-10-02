function drawFigureOfSquares(n) {
    let lastRow = n % 2 === 0 ? n - 1 : n;
    let midRow = n % 2 === 0 ? n / 2 : Math.floor(n / 2 + 1);
    let output = '';

    for (row = 1; row <= lastRow; row++) {
        if (row === 1 || row === midRow || row === lastRow) {
            output += '+';

            for (let col = 1; col <= n - 2; col++) {
                output += '-';
            }

            output += '+';

            for (let col = 1; col <= n - 2; col++) {
                output += '-';
            }

            output += '+\n';
        }else {
            output += '|';

            for (let col = 1; col <= n - 2; col++) {
                output += ' ';
            }

            output += '|';

            for (let col = 1; col <= n - 2; col++) {
                output += ' ';
            }

            output += '|\n';
        }
    }

    console.log(output);
}