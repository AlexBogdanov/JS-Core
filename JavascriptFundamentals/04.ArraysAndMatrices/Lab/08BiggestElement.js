function findBiggest(data) {
    let biggest = -100000;

    for (let i = 0; i < data.length; i++) {
        let currArr = data[i];
        currArr.sort((x, y) => { return x-y; });
        
        let currBiggest = currArr[currArr.length - 1];

        if (currBiggest > biggest) {
            biggest = currBiggest;
        }
    }

    console.log(biggest);
}