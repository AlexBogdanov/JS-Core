function isAPointInside(data) {
    let x1 = 10;
    let x2 = 50;
    let y1 = 20;
    let y2 = 80;
    let z1 = 15;
    let z2 = 50;

    let index = 0;

    for (let i = 0; i < data.length / 3; i++) {
        let x = data[index++];
        let y = data[index++];
        let z = data[index++];

        if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }    
}