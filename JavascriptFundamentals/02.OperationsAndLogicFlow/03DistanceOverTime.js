function calculateDistanceOverTime(data) {
    let obj1 = {
        distance: 0,
        speed: data[0]
    };

    let obj2 = {
        distance: 0,
        speed: data[1]
    };

    let periodOfTime = data[2];

    obj1.distance = obj1.speed * (periodOfTime / 3600);
    obj2.distance = obj2.speed * (periodOfTime / 3600);

    let distanceInBewtween = Math.max(obj1.distance, obj2.distance) - Math.min(obj1.distance, obj2.distance);


    console.log(distanceInBewtween * 1000);
}