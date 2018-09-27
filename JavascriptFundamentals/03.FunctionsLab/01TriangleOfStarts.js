function printTriangle(n) {
    let output = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            output += '*';
        }

        output += '\n';
    }

    for (let row = n - 1; row >= 1; row--) {
        for (col = row; col >= 1; col--) {
            output += '*';
        }

        output += '\n';
    }

    console.log(output);
}