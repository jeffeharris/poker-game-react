import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Player',
      hand: [],
      score: 0
    };
  }

  render() {
    return (
      <div id="player-id">
        <h2>{this.state.name}</h2>
        <div>
          {this.state.hand.map((card, index) => (
            <div key={index}>
              <p>{card.rank} of {card.suit}</p>
            </div>
          ))}
        </div>
        <h3>Score: {this.state.score}</h3>
      </div>
    );
  }
}

export default Player;