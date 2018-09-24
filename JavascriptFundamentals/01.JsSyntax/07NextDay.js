function nextDay(year, month, date) {
    let today = new Date(year, month - 1, date);
    
    today.setDate(today.getDate() + 1);
    
    console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
}