function rotateArr(data) {
    let rotations = data[data.length-1];
    data.pop();

    for (let i = 1; i <= rotations; i++) {
        let tmp = [];
        tmp.push(data[data.length-1]);

        for (let i = 0; i < data.length - 1; i++) {
            tmp.push(data[i]);
        }

        data = tmp;
    }

    console.log(data.join(' '));
}