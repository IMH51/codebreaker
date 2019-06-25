import React, { Component } from 'react';

const initialState = {
  username: "",
  guesses: "20"
}

class Login extends Component {

  constructor() {
    super()

    this.state = initialState

    this.options = [
      {level: "Easy",
      guesses: 20},
      {level: "Intermediate",
      guesses: 15},
      {level: "Hard",
      guesses: 10}
    ]

    this.difficulty = ""

  }

  handleChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value })
  }

  handleLogin = () => {
    this.props.login(this.state.username, this.state.guesses)
    this.props.history.push("/game")
  }

  render = () => {
    return (
      <div className="login-container">
      <h1>Welcome To Codebreaker</h1>
      <p>Please enter your name and choose a difficulty level to begin:</p>
      <input onChange={this.handleChange} type="text" placeholder='Username' name="username" value={this.props.username} />
      <select name="guesses" onChange={this.handleChange} className="difficulty-select" >
        {this.options.map(level => <option key={level.level} name={level.level} value={level.guesses}>{`${level.level} - ${level.guesses} Guesses`}</option>)}
      </select>
      <button name="login" onClick={this.handleLogin} value="submit">Start Game</button>
      </div>
    )
  }

}

export default Login
