const playingCards = require('./02PlayingCards');

exports.printDeck = function(data) {
    let validCards = [];

    for (let i = 0; i < data.length; i++) {
        let currCard = data[i];
        const suit = currCard[currCard.length-1];
        const face = currCard.substring(0, currCard.length-1);
        
        try {
            validCards.push(playingCards.makeCard(face, suit));
        } catch (err) {
            return console.log('Invalid card ' + face + suit);
        }
    }
    
    return console.log(validCards.join(' '));
};