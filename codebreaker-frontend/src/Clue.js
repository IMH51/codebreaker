import React, { Component } from 'react'

class Clue extends Component {

  render = () => {
    return (
    <div key={this.props.index}>
      <h3>Guess {Number(this.props.index) + 1}: {this.props.clue.guess}</h3>
      <p>This guess contains <strong>{this.props.clue.correctPosition}</strong> number(s) in the correct position and <strong>{this.props.clue.correctNumber}</strong> number(s) in the wrong position.</p>
    </div>
    )
  }

}

export default Clue
