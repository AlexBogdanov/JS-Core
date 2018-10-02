function printNthEl(data) {
    let n = data[data.length-1];
    data.pop();
    
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            console.log(data[i]);
        } else if (i % n === 0) {
            console.log(data[i]);
        }
    }
}