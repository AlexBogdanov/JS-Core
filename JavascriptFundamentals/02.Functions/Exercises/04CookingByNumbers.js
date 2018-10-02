function cook(data) {
    let num = +data[0];

    let chop = (num) => {
        return num / 2;
    };

    let dice = (num) => {
        return Math.sqrt(num);
    };

    let spice = (num) => {
        return num + 1;
    };

    let bake = (num) => {
        return num * 3;
    };

    let fillet = (num) => {
        return num - (num * 0.20);
    };

    for (let i = 1; i < data.length; i++) {
        let command = data[i];

        switch (command) {
            case 'chop': num = chop(num); console.log(num); break;
            case 'dice': num = dice(num); console.log(num); break;
            case 'spice': num = spice(num); console.log(num); break;
            case 'bake': num = bake(num); console.log(num); break;
            case 'fillet': num = fillet(num); console.log(num); break;
        }
    }
}