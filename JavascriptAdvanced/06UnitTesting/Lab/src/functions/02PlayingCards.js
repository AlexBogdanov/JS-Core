exports.makeCard = function(face, suit) {
    function getSuit(suit) {
        if (suit === 'S') {
            return '\u2660';
        } else if (suit === 'H') {
            return '\u2665';
        } else if (suit === 'D') {
            return '\u2666';
        } else if (suit === 'C') {
            return '\u2663';
        }
    }

    face = face.toUpperCase();
    suit = suit.toUpperCase();

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face)) {
        throw new Error('Invalid card ' + face + suit);
    }

    if (!validSuits.includes(suit)) {
        throw new Error('Invalid card ' + face + suit);
    }
    
    const suitStr = getSuit(suit);
    
    return face + suitStr;
};