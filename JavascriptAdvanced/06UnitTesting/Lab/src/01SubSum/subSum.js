/**
 * first element not array => NaN v
 * any element in the arr is not Number => NaN v
 * first i < 0 => i = 0 v
 * sec i > arr.length-1 => i = arr.length-1 v
 */

function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    let anyNan = false;

    arr.forEach(el => {
        if (isNaN(el)) {
            anyNan = true;
        }
    });

    if (anyNan) {
        return NaN;
    }

    if (arr.length === 0) {
        return 0;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += arr[i];
    }

    return sum;
}

module.exports = subSum;