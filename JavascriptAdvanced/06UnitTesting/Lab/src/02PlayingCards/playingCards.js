function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        C: '\u2663',
        D: '\u2666 ',
        H: '\u2665 ',
        S: '\u2660 '
    };

    if (!validFaces.includes(face)) {
        throw new Error(`Invalid card face: ${face}`);
    }

    if (!validSuits.hasOwnProperty(suit)) {
        throw new Error(`Invalid card suit: ${suit}`);
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${validSuits[suit]}`;
        }
    };
}

module.exports = makeCard;