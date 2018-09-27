function calculator (a, b, operator) {
    let result = 0;

    let calculate = (a, b, op) => { return op(a, b); };

    let add = (a, b) => { return a + b; };
    let subtraction = (a, b) => { return a - b; };
    let multiply = (a, b) => { return a * b; };
    let divide = (a, b) => { return a / b; };

    switch (operator) {
        case '+': result = calculate(a, b, add); break;
        case '-': result = calculate(a, b, subtraction); break;
        case '*': result = calculate(a, b, multiply); break;
        case '/': result = calculate(a, b, divide); break;
    }

    console.log(result);
}