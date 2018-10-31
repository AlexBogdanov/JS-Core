function orderRectangles(data) {
    let triangles = [];

    for (let tokens of data) {
        let triangle = {
            width: Number(tokens[0]),
            height: Number(tokens[1]),
            calcualteArea: function() {
                return this.width * this.height / 2;
            },
            compareTo: function(triangle) {
                if (this.calcualteArea(this.width, this.height) > triangle.calcualteArea(triangle.width, triangle.height)) {
                    return 1;
                } else if (this.calcualteArea(this.width, this.height) > triangle.calcualteArea(triangle.width, triangle.height)) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }

        triangles.push(triangle);
    }

    return triangles.sort((triangle1, triangle2) => {
        return triangle2.calcualteArea(triangle2.width, triangle2.height) - triangle1.calcualteArea(triangle1.width, triangle1.height) ||
        triangle2.width - triangle1.width;
    });
}