function matrixDiagonals(data) {
    let matrix = data.map(el => {
        let arr = el.split(' ');
        return arr;
    })

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    
    for (let row = 0; row < matrix.length; row++) {
        mainDiagonal += +matrix[row][row];
        secondaryDiagonal += +matrix[row][matrix.length - 1 - row];
    }
    
    if (mainDiagonal === secondaryDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (matrix[row][row] !== matrix[row][col] &&  matrix[row][matrix.length - 1 - row] !== matrix[row][col]) {
                    matrix[row][col] = mainDiagonal;
                }
            }
        }
    }

    matrix.forEach(el => console.log(el.join(' ')));
}