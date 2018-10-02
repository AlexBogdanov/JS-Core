function printKNums(data) {
    function getKNums(startIndex, endIndex, data) {
        let output = [];

        for (let i = startIndex; i < endIndex; i++) {
            output.push(data[i]);
        }

        return output;
    }

    let k = +data[0];
    let firstStartIndex = 1;
    let firstEndIndex = 1 + k;
    let lastStartIndex = data.length - k;
    let lastEndIndex = data.length;

    let firstK = getKNums(firstStartIndex, firstEndIndex, data);
    let lastK = getKNums(lastStartIndex, lastEndIndex, data);
    
    firstK.forEach((x) => {
        console.log(x);
    });

    lastK.forEach((x) => {
        console.log(x);
    });
}