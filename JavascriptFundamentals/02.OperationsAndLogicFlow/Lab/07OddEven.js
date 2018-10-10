function oddOrEven(num) {
    let output = '';

    if (num % 2 === 0) {
        output = 'even';
    } else if (num % 1 === 0) {
        output = 'odd';
    } else {
        output = 'invalid';
    }

    console.log(output);
}