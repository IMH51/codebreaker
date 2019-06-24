import React, { Component } from 'react'

class Clue extends Component {

  render = () => {
    return (
    <div>
      <h3>Guess {Number(this.props.index) + 1}: {this.props.clue.guess}</h3>
      <p>This guess contains {this.props.clue.correctPosition} number(s) in the correct position and {this.props.clue.correctNumber} number(s) in the wrong position.</p>
    </div>
    )
  }

}

export default Clue
