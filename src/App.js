import React, { Component } from 'react';
import PokerTable from './components/PokerTable';
import Player from './components/Player';
import Deck from './components/Deck';
import ScoreBoard from './components/ScoreBoard';
import Button from './components/Button';
import CalculateWinner from './utils/CalculateWinner';
import ShuffleDeck from './utils/ShuffleDeck';
import DealCards from './utils/DealCards';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      player: {
        name: 'Player',
        hand: [],
        score: 0
      },
      winner: null
    };
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    let deck = ShuffleDeck();
    let player = this.state.player;
    player.hand = DealCards(deck);
    this.setState({ deck, player });
  }

  handleDealCards = () => {
    let deck = this.state.deck;
    let player = this.state.player;
    player.hand = DealCards(deck);
    this.setState({ deck, player });
  }

  handleCalculateWinner = () => {
    let player = this.state.player;
    player.score = CalculateWinner(player.hand);
    this.setState({ player });
  }

  render() {
    return (
      <div className="App">
        <PokerTable>
          <Player player={this.state.player} />
          <Deck deck={this.state.deck} />
        </PokerTable>
        <ScoreBoard score={this.state.player.score} />
        <Button onClick={this.handleDealCards}>Deal Cards</Button>
        <Button onClick={this.handleCalculateWinner}>Calculate Winner</Button>
      </div>
    );
  }
}

export default App;