import React, { Component } from 'react';

class Scores extends Component {

  playAgain = () => {
    this.props.resetApp()
    this.props.history.push("/")
  }

  render = () => {
    return(
      <div className="highscore-container">
      <h2>Congratulations {this.props.current.user}, you cracked the code!</h2>
      {this.props.selection.includes(this.props.current) ?
        <p> You scored {this.props.current.score}, which gets you on to the Leaderboard!</p> :
        <p> You scored {this.props.current.score} </p>
      }
      <h3>High Scores:</h3>
      <div className="scores-div">
      <ol className="scores-list">
      {this.props.selection.map((highScore, index) => <li key={index}>{highScore.user} - {highScore.score}</li>)}
      </ol>
      </div>
      <button onClick={this.playAgain}>Play Again</button>
    </div>
    )
  }
}

export default Scores
