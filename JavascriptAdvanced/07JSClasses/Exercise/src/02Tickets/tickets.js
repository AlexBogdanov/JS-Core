function ticketsList(data, sortStrategy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    data.forEach(input => {
        const tokens = input.split('|');
        const ticket = new Ticket(tokens[0], tokens[1], tokens[2]);
        tickets.push(ticket);
    });

    if (sortStrategy === 'destination') {
        tickets.sort((ticket1, ticket2) =>
            (ticket1.destination > ticket2.destination) ? 1 :
            ((ticket2.destination > ticket1.destination) ? -1 : 0));
    } else if (sortStrategy === 'price') {
        tickets.sort((ticket1, ticket2) =>
            (ticket1.price > ticket2.price) ? 1 :
            ((ticket2.price > ticket1.price) ? -1 : 0));
    } else if (sortStrategy === 'status') {
        tickets.sort((ticket1, ticket2) =>
            (ticket1.status > ticket2.status) ? 1 :
            ((ticket2.status > ticket1.status) ? -1 : 0));
    }

    return tickets.map(ticket => `Ticket ${JSON.stringify(ticket)}`);
}

// module.exports = ticketsList;