function checkIfValid(data) {
    let x1 = data[0];
    let y1 = data[1];
    let x2 = data[2];
    let y2 = data[3];

    let point1 = {
        x: x1,
        y: y1
    };

    let point2 = {
        x: x2,
        y:y2
    };

    let point0 = {
        x: 0,
        y: 0
    }

    let p1ToP0Num = Math.sqrt(Math.pow(Math.max(point1.x, point0.x) - Math.min(point1.x, point0.x), 2) + Math.pow(Math.max(point1.y, point0.y) - Math.min(point1.y, point0.y), 2));
    let p2ToP0Num = Math.sqrt(Math.pow(Math.max(point2.x, point0.x) - Math.min(point2.x, point0.x), 2) + Math.pow(Math.max(point2.y, point0.y) - Math.min(point2.y, point0.y), 2));
    let p1ToP2Num = Math.sqrt(Math.pow(Math.max(point1.x, point2.x) - Math.min(point1.x, point2.x), 2) + Math.pow(Math.max(point1.y, point2.y) - Math.min(point1.y, point2.y), 2));

    let p1ToP0 = Number.isInteger(p1ToP0Num);
    let p2ToP0 = Number.isInteger(p2ToP0Num);
    let p1ToP2 = Number.isInteger(p1ToP2Num);
    
    if (p1ToP0) {
        console.log(`{${point1.x}, ${point1.y}} to {${point0.x}, ${point0.y}} is valid`);
    } else {
        console.log(`{${point1.x}, ${point1.y}} to {${point0.x}, ${point0.y}} is invalid`);
    }

    if (p2ToP0) {
        console.log(`{${point2.x}, ${point2.y}} to {${point0.x}, ${point0.y}} is valid`);
    } else {
        console.log(`{${point2.x}, ${point2.y}} to {${point0.x}, ${point0.y}} is invalid`);
    }

    if (p1ToP2) {
        console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is valid`);
    } else {
        console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is invalid`);
    }
}