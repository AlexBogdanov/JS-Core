function processOdds(data) {
    let arr = data.map((el, index) => {
        if (index % 2 !== 0) {
            return el * 2;
        }
    }).reverse();

    console.log(arr.join(' '));
}