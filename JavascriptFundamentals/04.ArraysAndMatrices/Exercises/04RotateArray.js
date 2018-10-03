function rotateArr(data) {
    let rotations = data[data.length-1];
    data.pop();

    for (let i = 0; i < rotations % data/length; i++) {
        data.unshift(data.pop());
    }

    console.log(data.join(' '));
}