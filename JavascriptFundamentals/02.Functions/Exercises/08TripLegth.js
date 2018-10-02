function solve([x1, y1, x2, y2, x3, y3]) {
    let calculateDistance = (x1, y1, x2, y2) => {
        let a = Math.abs(x1 - x2);
        let b = Math.abs(y1 - y2);
        let res = Math.sqrt(a * a + b * b);

        return res;
    };

    let d1 = calculateDistance(x1, y1, x2, y2);
    let d2 = calculateDistance(x1, y1, x3, y3);
    let d3 = calculateDistance(x2, y2, x3, y3);

    let paths = [
        { distance: d1 + d2, order: '2->1->3' },
        { distance: d1 + d3, order: '1->2->3' },
        { distance: d2 + d3, order: '1->3->2' }
    ]

    paths = paths.sort((x, y) => {
        return x.distance - y.distance;
    });

    console.log(`${paths[0].order}: ${paths[0].distance}`)
}