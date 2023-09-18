import React from 'react';
import Card from './Card';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
    };
  }

  componentDidMount() {
    this.initializeDeck();
  }

  initializeDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];

    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push({ suit, rank });
      }
    }

    this.setState({ deck });
  }

  render() {
    return (
      <div id="deck-id">
        {this.state.deck.map((card, index) => (
          <Card key={index} suit={card.suit} rank={card.rank} />
        ))}
      </div>
    );
  }
}

export default Deck;