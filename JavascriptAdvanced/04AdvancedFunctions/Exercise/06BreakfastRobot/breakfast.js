const recipes = require('./recipes');

function robot(data) {
    let stock = {
        protein: 0,
        carb: 0,
        fat: 0,
        flavour: 0
    }

    function restock(microelement, quantity) {
        stock[microelement] += quantity;
        console.log('Success');
    }

    function prepare(recipe, quantity) {
        let proteinNeeded = quantity * recipes[recipe].protein;
        let carbsNeeded = quantity * recipes[recipe].carb;
        let fatsNeeded = quantity * recipes[recipe].fat;
        let flavoursNeeded = quantity * recipes[recipe].flavour;

        if (stock.protein >= proteinNeeded && stock.carb >= carbsNeeded &&
            stock.fat >= fatsNeeded && stock.flavour >= flavoursNeeded) {
            stock.protein -= proteinNeeded;
            stock.carb -= carbsNeeded;
            stock.fat -= fatsNeeded;
            stock.flavour -= flavoursNeeded;

            console.log('Success');
        } else if (stock.protein < proteinNeeded) {
            console.log(`Error: not enough protein in stock`);
        } else if (stock.carb < carbsNeeded) {
            console.log(`Error: not enough carb in stock`);
        } else if (stock.fat < fatsNeeded) {
            console.log(`Error: not enough fat in stock`);
        } else if (stock.flavour < flavoursNeeded) {
            console.log(`Error: not enough flavour in stock`);
        }
    }

    function report() {
        console.log(`protein=${stock.protein} carbohydrate=${stock.carb} fat=${stock.fat} flavour=${stock.flavour}`);
    }

    const tokens = data.split(' ');
    const command = tokens[0];

    if (command === 'restock') {
        restock(tokens[1], +tokens[2]);
    } else if (command === 'prepare') {
        prepare(tokens[1], +tokens[2]);
    } else if (command === 'report') {
        report();
    }
}

module.exports = robot;