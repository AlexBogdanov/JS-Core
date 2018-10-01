function findEvenPosition(data) {
    let result = data.map((x, index) => {
        if (index % 2 === 0) {
            return x;
        }
    });
    
    let output = '';

    result.forEach((x) => {
        if (x !== undefined) {
            output += x + ' ';
        }
    });

    console.log(output);
}