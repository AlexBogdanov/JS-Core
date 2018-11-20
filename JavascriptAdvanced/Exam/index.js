const Vacation = require('./src/03Vacation/Vacation');

let vacation = new Vacation('Some organizer', 'Destination', 300);
vacation.registerChild('name', '3', 1000);
vacation.registerChild('name1', '3', 1000);
vacation.registerChild('name2', '3', 100);
vacation.registerChild('name3', '3', 200);
vacation.registerChild('name4', '3', 1000);
console.log(vacation.kids['3']);