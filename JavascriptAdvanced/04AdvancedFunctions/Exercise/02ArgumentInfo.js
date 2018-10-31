function argumentInfo() {
    let typesAndCount = {};

    for (let argument of arguments) {
        if (!typesAndCount.hasOwnProperty(typeof(argument))) {
            typesAndCount[typeof(argument)] = 1;
        } else {
            typesAndCount[typeof(argument)] += 1;
        }

        console.log(`${typeof(argument)}: ${argument}`);
    }

    Object.keys(typesAndCount).sort((type1, type2) => {
        return typesAndCount[type2] - typesAndCount[type1];
    }).forEach(type => {
        console.log(`${type} = ${typesAndCount[type]}`);
    });
}