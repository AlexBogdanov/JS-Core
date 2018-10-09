function populationInTowns(data) {
    let townsAndPopulation = new Map();

    data.forEach(el => {
        let currArr = el.split(' <-> ');

        if (!townsAndPopulation.has(currArr[0])) {
            townsAndPopulation.set(currArr[0], +currArr[1]);
        } else {
            townsAndPopulation.set(currArr[0], townsAndPopulation.get(currArr[0]) + +currArr[1]);
        }
    });

    Array.from(townsAndPopulation.keys())
        .forEach(el => {
            console.log(`${el} : ${townsAndPopulation.get(el)}`);
        });
}