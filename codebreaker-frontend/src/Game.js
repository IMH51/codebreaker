import React, { Component } from 'react'

const initialState = {
  code: ""
}

class Game extends Component {

  constructor() {
    super()

    this.state = initialState
  }

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push('/')
    }
  }

  handleChange =  event => {
    this.setState({...this.state, code: event.target.value})
  }

  render = () => {
    return (
      <div class="game-container">
        <h1>CodeBreaker</h1>
        <h3>Level - {this.props.level}</h3>
        <p>{this.props.username}, you have {this.props.guesses} guesses remaining.</p>
        <p>Please enter a 4 digit code below:</p>
        <input name="guess" placeholder="Enter Code Here..." value={this.state.code} onChange={this.handleChange} />
        <button name="submit" onClick={() => this.props.checkCode(this.state.code)} value="submit">Submit</button>
      </div>
    )
  }

}

export default Game
