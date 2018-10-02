function drawTriangleOfDollars(n) {
    let output = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            output += '$';
        }
        
        output += '\n';
    }

    console.log(output);
}