function printHelix(input) {
    let n = +input;
    let sequnce = 'ATCGTTAGGG';
    let currChar = 0;

    for (let row = 0; row < n; row++) {
        if (row % 4 === 0) {
            if (currChar === sequnce.length) {
                currChar = 0;
            }

            console.log(`**${sequnce[currChar++]}${sequnce[currChar++]}**`);
        } else if (row % 4 === 1 || row % 4 === 3) {
            if (currChar === sequnce.length) {
                currChar = 0;
            }

            console.log(`*${sequnce[currChar++]}--${sequnce[currChar++]}*`);
        } else if (row % 4 === 2) {
            if (currChar === sequnce.length) {
                currChar = 0;
            }

            console.log(`${sequnce[currChar++]}----${sequnce[currChar++]}`);
        }
    }
}