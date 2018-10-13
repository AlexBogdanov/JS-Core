function bottledJuice(data) {
    let juices = {};
    let bottledJuices = {};

    for (let i = 0; i < data.length; i++) {
        const [fruit, quantityStr] = data[i].split(/\s*=>\s*/g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
        const quantity = +quantityStr;

        if (!juices.hasOwnProperty(fruit)) {
            juices[fruit] = quantity;
        } else {
            juices[fruit] += quantity;
        }

        while (juices[fruit] >= 1000) {
            if (!bottledJuices.hasOwnProperty(fruit)) {
                bottledJuices[fruit] = 1;
                juices[fruit] -= 1000;
            } else {
                bottledJuices[fruit] += 1;
                juices[fruit] -= 1000;
            }
        }
    }

    Object.keys(bottledJuices).forEach(juice => {
        console.log(`${juice} => ${bottledJuices[juice]}`);
    });
}