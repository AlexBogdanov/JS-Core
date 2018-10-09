function sumPopulation(data) {
    let towns = {};

    for (let i = 0; i < data.length; i+=2) {
        let town = data[i];
        let population = +data[i+1];

        if (!towns.hasOwnProperty(town)) {
            towns[`${town}`] = population;
        } else {
            towns[`${town}`] += population;
        }
    }

    console.log(JSON.stringify(towns));
}