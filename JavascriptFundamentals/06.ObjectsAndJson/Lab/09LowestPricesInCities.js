function takeLowestPrices(data) {
    let splitPattern = new RegExp('[\s]*[\|]+[\s]*', 'gm');
    let products = new Map();

    data.forEach(token => {
        const [town, product, price] = token.split(splitPattern)
            .filter(el => {return el;})
            .map(el => {return el.trim();});

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, +price);
    });

    console.log();

    products.forEach((towns, product) => {
        let bestPrice = Number.MAX_VALUE;
        let bestTown = '';

        towns.forEach((price, town) => {
            if (price < bestPrice) {
                bestPrice = price;
                bestTown = town;
            }
        });

        console.log(`${product} -> ${bestPrice} (${bestTown})`);
    });
}