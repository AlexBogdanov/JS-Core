let sortArray = function(arr, command) {
    let sortingPattern = command === 'asc' ?
    (a, b) => { return a - b; } : 
    (a, b) => { return b - a; };

    return arr.sort(sortingPattern);
}

module.exports = sortArray;