function orderRectangles(data) {
    let rectangles = [];

    for (let [width, height] of data) {
        let rectangle = {
            width,
            height,
            area: () => {
                return rectangle.width * rectangle.height;
            },
            compareTo: (rectArea) => {
                if (rectangle.area() > rectArea) {
                    return 1;
                } else if (rectangle.area() < rectArea) {
                    return -1;
                } else {
                    return 0;
                }
            }
        };

        rectangles.push(rectangle);
    }
    
    return rectangles;
}

module.exports = orderRectangles;
