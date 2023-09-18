import React from 'react';
import Card from './Card';
import Player from './Player';
import Button from './Button';
import ScoreBoard from './ScoreBoard';

class PokerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      player: { name: 'Player', hand: [], score: 0 },
      tableCards: [],
    };
  }

  render() {
    return (
      <div id="table-id">
        <Player player={this.state.player} />
        <div className="table-cards">
          {this.state.tableCards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        <Button id="button-id" onClick={this.props.shuffleDeck} text="Shuffle Deck" />
        <Button id="button-id" onClick={this.props.dealCards} text="Deal Cards" />
        <ScoreBoard score={this.state.player.score} />
      </div>
    );
  }
}

export default PokerTable;