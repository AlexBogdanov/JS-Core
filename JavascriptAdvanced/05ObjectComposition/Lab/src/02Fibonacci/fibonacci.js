let getFibonacci = (() => {
    let f0 = 1;
    let f1 = 1;

    return function() {
        let f = f0 + f1;
        f0 = f1;
        f1 = f;

        return f;
    }
})();

module.exports = getFibonacci;
