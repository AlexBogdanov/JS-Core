function checkMatrice(data) {
    let previousSum = 0;
    let isMagic = false;

    for (let row = 0; row < data.length; row++) {
        let sum = 0;
        
        data[row].forEach(el => sum += el);
        
        if (row === 0) {
            previousSum = sum;
        } else {
            isMagic = previousSum === sum ? true : false;

            if (!isMagic)
                break;
        }
    }
    
    console.log(isMagic);
}