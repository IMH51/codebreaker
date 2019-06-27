import React, { Component } from 'react';

class Lose extends Component {

  resetGame = () => {
    this.props.resetApp()
    this.props.history.push("/")
  }

  render = () => {
    return(
    <div className="lose-container">
      <p>Sorry, you failed to crack the code! Better luck next time!</p>
      <button onClick={this.resetGame}>Play Again</button>
    </div>
    )
  }

}

export default Lose
