let result = (() => {
    const suits = {
        CLUBS: "\u2663", // ♣
        DIAMONDS: "\u2666", // ♦
        HEARTS: "\u2665", // ♥
        SPADES: "\u2660" // ♠
    };

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            if (!validFaces.includes(face)) {
                throw new Error('Invalid card face: ' + face);
            }
            
            this.face = face;
            this.suit = suit;
        }

        toString() {
            return `${this.face}${this.suit}`;
        }
    }

    return  {
        Card: Card,
        Suits: suits
    };
})();