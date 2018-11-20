const orderRectangles = require('./src/01OrderRectangles/orderRectangles');
const getFibonacci = require('./src/02Fibonacci/fibonacci');
const listProcessor = require('./src/03ListProcessor/listProcessor');
const cars = require('./src/04Cars/cars');

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);