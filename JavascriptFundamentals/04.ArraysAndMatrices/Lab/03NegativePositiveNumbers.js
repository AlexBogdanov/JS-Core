function sortArr(arr) {
    let arrNegative = arr.filter((x) => {
        return x < 0;
    }).sort((x, y) => { return y - x; });

    let arrPositive = arr.filter((x) => {
        return x >= 0;
    });

    let resArr = arrNegative.concat(arrPositive);

    resArr.forEach((x) => {
        console.log(x);
    });
}