function isYearLeap(year) {
    let isLeap = false;

    if (year % 400 === 0) {
        isLeap = true;
    } else if (year % 100 === 0) {
        isLeap = false;
    } else if (year % 4 === 0) {
        isLeap = true;
    }

    if (isLeap) {
        console.log('yes');
    } else {
        console.log('no');
    }
}