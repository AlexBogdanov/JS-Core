function cityMarkets(data) {
    let result = new Map();

    data.forEach(el => {
        let currData = el.split(/->|:/gmi);
        let town = currData[0].trim();
        let product = currData[1].trim();
        let amountOfSales = +currData[2].trim();
        let pricePerUnit = +currData[3].trim();

        if (!result.has(town)) {
            let currMap = new Map();
            currMap.set(product, amountOfSales * pricePerUnit);
            result.set(town, currMap);
        } else {
            let currMap = result.get(town);

            if (!currMap.has(product)) {
                currMap.set(product, amountOfSales * pricePerUnit);
            } else {
                currMap.set(product, currMap.get(product) + amountOfSales * pricePerUnit);
            }

            result.set(town, currMap);
        }
    })

    Array.from(result.keys()).forEach(town => {
        console.log(`Town - ${town}`);

        Array.from(result.get(town).keys()).forEach(product => {
            console.log(`$$$${product} : ${result.get(town).get(product)}`);
        })
    })
}