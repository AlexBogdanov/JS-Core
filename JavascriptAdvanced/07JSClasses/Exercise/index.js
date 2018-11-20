const HTTPRequest = require('./src/01HTTPRequest/httpRequest');
const ticketsList = require('./src/02Tickets/tickets');

console.log(ticketsList(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
).join('\n'));