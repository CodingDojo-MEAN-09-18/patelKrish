// Assignment: Deck of Cards

class Deck
{
    constructor() 
    {
        // given deck
        this.deck = [];
    }

    // The Deck should be able to reset
    reset()
    {   
        // create deck
        this.deck = [];

        // Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
        const suit = ["Hearts", "Clubs", "Diamonds", "Spades"];
        // Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
        const val = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Joker", "Queen", "King"];

        // Create deck
        //...loop suit
        for (const s of suit) 
        {
            //...for each suit, add value            
            for (const v of val) 
            {
                this.deck.push(`${ s } : ${ v }`);
            }
        }
        
        return this; // allow for chaining
    }

    // The Deck should be able to shuffle
    shuffle() 
    {
        // get length of deck
        let len = this.deck.length;
        // switch variables
        let x = '';
        let y = '';

        // Random order
        while (len)
        {
            x = Math.floor(Math.random() * len--);
            y = this.deck[len];
            this.deck[len] = this.deck[x];
            this.deck[x] = y;
        }

        return this;
    }

    // The Deck should be able to deal a random Card
    deal()
    {   
        return this.deck.pop();
    }

    // Deal should return the Card that was dealt and remove it from the Deck
}

class Player
{
    constructor(name)
    {
        // The Player should have a name
        this.name = name;
        // The Player should have a hand (an array of cards taken from a Deck)
        this.hand = [];     // store cards dealt
    }
    
    // The Player should be able to take a Card (use the deck.deal method)
    take(deck)
    {
        this.hand.push(deck.deal());
        return this;
    }

    // The Player should be able to discard a Card    
    removeCard()
    {
        return this.hand.pop() + this.hand;
    }
}

const deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);

const player2 = new Player("Ronnel");
player2.take(deck2).take(deck2);
console.log(player2);
