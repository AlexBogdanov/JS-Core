function rotateArr(data) {
    let rotations = data[data.length-1];
    data.pop();

    for (let i = 0; i < rotations % data/length; i++) {
        // let tmp = [];
        // tmp.push(data[data.length-1]);

        // for (let i = 0; i < data.length - 1; i++) {
        //     tmp.push(data[i]);
        // }

        // data = tmp.slice(0);

        data.unshift(data.pop());
    }

    console.log(data.join(' '));
}