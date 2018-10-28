function argumentInfo() {
    let types = {};

    for (let i = 0; i < arguments.length; i++) {
        if (!types.hasOwnProperty(typeof(arguments[i]))) {
            types[typeof(arguments[i])] = 1;
        } else {
            types[typeof(arguments[i])]++;
        }

        console.log(`${typeof(arguments[i])}: ${arguments[i]}`);
    }

    Object.keys(types).sort((type1, type2) => {
        return types[type2] - types[type1];
    }).forEach(type => {
        console.log(`${type} = ${types[type]}`);
    });
}