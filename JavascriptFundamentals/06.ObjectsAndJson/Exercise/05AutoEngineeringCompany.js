function brandsAndModels(data) {
    let cars = {};

    for (let i = 0; i < data.length; i++) {
        const [brand, model, producedStr] = data[i].split(/\s*\|\s*/g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        const produced = +producedStr;

        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
            cars[brand][model] = produced;
        } else {
            if (!cars[brand].hasOwnProperty(model)) {
                cars[brand][model] = produced;
            } else {
                cars[brand][model] += produced;
            }
        }
    }

    Object.keys(cars).forEach(carBrand => {
        console.log(`${carBrand}`);

        Object.keys(cars[carBrand]).forEach(brandModel => {
            console.log(`###${brandModel} -> ${cars[carBrand][brandModel]}`);
        });
    });
}