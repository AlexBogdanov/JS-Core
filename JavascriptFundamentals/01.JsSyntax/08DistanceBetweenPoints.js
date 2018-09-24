function distanceBetweenPoints(x1, y1, x2, y2) {
    let point1 = {
        x: x1,
        y: y1
    };

    let point2 = {
        x: x2,
        y: y2
    };

    let res = Math.sqrt(Math.pow(Math.max(point1.x, point2.x) - Math.min(point1.x, point2.x), 2) + Math.pow(Math.max(point1.y, point2.y) - Math.min(point1.y, point2.y), 2));

    console.log(res);
}