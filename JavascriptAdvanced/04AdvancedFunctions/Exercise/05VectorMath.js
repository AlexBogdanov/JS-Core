let solution = (() => {

    function add(v1, v2) {
        return [(v1[0] + v2[0]), (v1[1] + v2[1])];
    }

    function multiply(v, delimeter) {
        return [(v[0] * delimeter), (v[1] * delimeter)];
    }

    function length(v) {
        return Math.sqrt((v[0] * v[0]) + (v[1] * v[1]));
    }

    function dot(v1, v2) {
        return ((v1[0] * v2[0]) + (v1[1] * v2[1]));
    }

    function cross(v1, v2) {
        return ((v1[0] * v2[1]) - (v1[1] * v2[0]));
    }

    return {
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    }
})();