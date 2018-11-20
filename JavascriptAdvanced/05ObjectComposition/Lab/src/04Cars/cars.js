function cars(data){
    let cars = new Map();

    function create(name) {
        cars.set(name, {});
    }

    function createInherits(name, parentName) {
        let parent = cars.get(parentName);
        let child = Object.create(parent);
        cars.set(name, child);
    }

    function set(name, key, value) {
        let car = cars.get(name);
        car[key] = value;
        cars.set(name, car);
    }

    function print(name) {
        let car = cars.get(name);
        console.log(JSON.stringify(car));
    }

    function process() {
        return {
            create,
            createInherits,
            set,
            print
        }
    }

    return function() {
        data.forEach(input => {
            const tokens = input.split(' ');
            
            if (tokens.includes('inherit')) {
                return process.createInherits(tokens[1], tokens[3]);
            } else if (tokens.includes('create')) {
                return process.create(tokens[1]);
            } else if (tokens.includes('set')) {
                return process.set(tokens[1], tokens[2], tokens[3]);
            } else if (tokens.includes('print')) {
                return process.print(tokens[1]);
            }
        });
    };
}

module.exports = cars;