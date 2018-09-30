function checkSpeed(data) {
    let speed = +data[0];
    let area = data[1];

    if (area === 'motorway') {
        let diff = speed - 130;
        
        if (diff <= 0) {

        } else if (diff > 0 && diff <= 20) {
            console.log('speeding');
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff > 40) {
            console.log('reckless driving');
        }
    } else if (area === 'interstate') {
        let diff = speed - 90;
        
        if (diff <= 0) {

        } else if (diff > 0 && diff <= 20) {
            console.log('speeding');
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff > 40) {
            console.log('reckless driving');
        }
    } else if (area === 'residential') {
        let diff = speed - 20;
        
        if (diff <= 0) {

        } else if (diff > 0 && diff <= 20) {
            console.log('speeding');
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff > 40) {
            console.log('reckless driving');
        }
    } else if (area === 'city') {
        let diff = speed - 50;
        
        if (diff <= 0) {

        } else if (diff > 0 && diff <= 20) {
            console.log('speeding');
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff > 40) {
            console.log('reckless driving');
        }
    }
}