exports.sumArr = function(arr, startIndex, endIndex) {
    startIndex = Number(startIndex);
    if (startIndex < 0) {
        startIndex = 0;
    }

    endIndex = Number(endIndex);
    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    }
    
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (arr.length === 0) {
        return 0;
    }

    arr.forEach(el => {
        if (el !== Number) {
            return NaN;
        }
    });
    
    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }

    return sum;
};