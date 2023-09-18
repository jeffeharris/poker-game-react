import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.playerScore !== prevProps.playerScore) {
      this.setState({
        playerScore: this.props.playerScore
      });
    }
  }

  render() {
    return (
      <div id="scoreboard-id">
        <h2>Score Board</h2>
        <p>Player Score: {this.state.playerScore}</p>
      </div>
    );
  }
}

export default ScoreBoard;