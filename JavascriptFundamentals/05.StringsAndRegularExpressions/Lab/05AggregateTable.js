function sort(data) {
    let sum = 0;
    let towns = [];

    for (let i = 0; i < data.length; i++) {
        let currArr = data[i].split(' | ');
        let town = currArr[0].trim();
        let people = +currArr[1];

        towns.push(town.slice(1, town.length));
        sum += people;
    }

    console.log(towns.join(','));
    console.log(sum);
}