function findEqualNeighbors(data) {
    let neighbors = 0;

    for (let row = 0; row < data.length; row++) {
        if (row !== data.length - 1) {
            for (let col = 0; col < data[row].length; col++) {
                if (data[row][col] === data[row+1][col] || data[row][col] === data[row][col+1] || data[row][col] === data[row][col-1]) {
                    neighbors++;
                }
            }
        }
    }

    console.log(neighbors);
}
