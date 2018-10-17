function coffeeMachine(data) {
    let totalMoney = 0;

    for (let i = 0; i < data.length; i++) {
        let tokens = data[i].split(/\s*,\s*/g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        let price = 0;
        let change = 0;
        let finalDrink = '';
        let enoughMoney = false;

        if (tokens[1] === 'coffee') {

            if (tokens[3] === 'milk') {
                const [coinsStr, drink, type, milk, sugarStr] = tokens;
                const coins = +coinsStr;
                const sugar = +sugarStr;

                if (type === 'decaf') {
                    price += 0.90;
                    let milkPrice = price * 0.10;
                    let milkPriceRounded = parseFloat(milkPrice.toFixed(1));
                    price += milkPriceRounded;

                    if (sugar > 0) {
                        price += 0.10;
                    }
                } else if (type === 'caffeine') {
                    price += 0.80;
                    let milkPrice = price * 0.10;
                    let milkPriceRounded = parseFloat(milkPrice.toFixed(1));
                    price += milkPriceRounded;

                    if (sugar > 0) {
                        price += 0.10;
                    }
                }

                change = Math.abs(coins - price);

                if (coins >= price) {
                    enoughMoney = true;
                }
            } else {
                const [coinsStr, drink, type, sugarStr] = tokens;
                const coins = +coinsStr;
                const sugar = +sugarStr;

                if (type === 'decaf') {
                    price += 0.90;

                    if (sugar > 0) {
                        price += 0.10;
                    }
                } else if (type === 'caffeine') {
                    price += 0.80;

                    if (sugar > 0) {
                        price += 0.10;
                    }
                }

                change = Math.abs(coins - price);

                if (coins >= price) {
                    enoughMoney = true;
                }
            }

            finalDrink = 'coffee';
        } else if (tokens[1] === 'tea') {
            if (tokens[2] === 'milk') {
                const [coinsStr, drink, milk, sugarStr] = tokens;
                const coins = +coinsStr;
                const sugar = +sugarStr;

                price += 0.80;
                let milkPrice = price * 0.10;
                let milkPriceRounded = parseFloat(milkPrice.toFixed(1));
                price += milkPriceRounded;

                if (sugar > 0) {
                    price += 0.10;
                }

                change = Math.abs(price - coins);

                if (coins >= price) {
                    enoughMoney = true;
                }
            } else {
                const [coinsStr, drink, sugarStr] = tokens;
                const coins = +coinsStr;
                const sugar = +sugarStr;

                price += 0.80;

                if (sugar > 0) {
                    price += 0.10;
                }

                change = Math.abs(price - coins);

                if (coins >= price) {
                    enoughMoney = true;
                }
            }

            finalDrink = 'tea';
        }

        if (enoughMoney) {
            console.log(`You ordered ${finalDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            totalMoney += price;
        } else {
            console.log(`Not enough money for ${finalDrink}. Need ${change.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}