function printSquare(n) {
    let output = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            output += '* ';
        }

        output += '\n';
    }

    console.log(output);
}