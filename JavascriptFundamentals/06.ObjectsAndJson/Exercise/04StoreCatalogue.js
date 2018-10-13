function makeCatalogue(data) {
    let catalogue = {};

    for (let i = 0; i < data.length; i++) {
        const [product, priceStr] = data[i].split(/\s*:\s*/g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        const price = +priceStr;

        catalogue[product] = price;
    }

    let orederedCatalogue = Object.keys(catalogue).sort();

    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i);
        let printLetter = false;

        orederedCatalogue.forEach(el => {
            if (el[0].toUpperCase() === letter) {
                printLetter = true;
            }
        })

        if (printLetter) {
            console.log(letter);
            orederedCatalogue.forEach(el => {
                if (el.toUpperCase().startsWith(letter)) {
                    console.log(`  ${el}: ${catalogue[el]}`);
                }
            })
        }
    }
}