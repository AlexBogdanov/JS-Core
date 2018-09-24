function printLastDateOfLastMonth(data) {
    let today = new Date(data[2], data[1] - 1, data[0]);

    let leapYear = today.getFullYear() % 400 === 0 ? 
    true : today.getFullYear() % 100 === 0 ? false :
    today.getFullYear() % 4 === 0 ? true : false;
    
    let lastMonth = today.getMonth();

    if ((lastMonth < 7 && lastMonth % 2 === 0) || (lastMonth > 8 && lastMonth % 2 !== 0)) {
        output = lastMonth === 2 && leapYear ? 29 : lastMonth === 2 && !leapYear ? 28 : 30;
    } else {
        output = 31;
    }

    console.log(output);
}