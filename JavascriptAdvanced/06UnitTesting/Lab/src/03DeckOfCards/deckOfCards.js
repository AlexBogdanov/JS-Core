const makeCard = require('./../02PlayingCards/playingCards');

function printDeck(cards) {
    let output = [];

    cards.forEach(card => {
        const face = card.substr(0, card.length-1);
        const suit = card[card.length-1];

        output.push('' + makeCard(face, suit));
    });

    console.log(output.join(' '));
}   

module.exports = printDeck;