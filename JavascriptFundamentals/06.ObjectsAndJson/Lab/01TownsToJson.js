function parseToJson(data) {
    let splitPattern = new RegExp('[\s]*[\|]+[\s]*', 'gm');
    let towns = [];

    let names = data[0].split(splitPattern)
        .filter(town => {return town;})
        .map(town => {return town.trim()});
    let objName = names[0];
    let objLatitude = names[1];
    let objLongtitude = names[2];

    for (let i = 1; i < data.length; i++) {
        let currTown = data[i].split(splitPattern)
            .filter(town => {return town;})
            .map(town => {return town.trim()});
        let townName = currTown[0];
        let latitude = +currTown[1];
        let longtitude = +currTown[2];

        let currObj = {};
        currObj[`${objName}`] = townName;
        currObj[`${objLatitude}`] = latitude;
        currObj[`${objLongtitude}`] = longtitude;

        towns.push(currObj);
    }

    console.log(JSON.stringify(towns));
}