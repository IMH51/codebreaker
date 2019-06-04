import React, { Component } from 'react';

class Login extends Component {

  constructor() {
    super()

    this.state = {
      username: null,
      difficulty: null,
      options: [
        {level: "Easy",
        guesses: 20},
        {level: "Intermediate",
        guesses: 15},
        {level: "Hard",
        guesses: 10}
      ]
    }

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = () => {

  }

  render = () => {
    return (
      <div class="login-screen">
      <h1>Welcome To Codebreaker</h1>
      <p>Please enter your name and choose a difficulty level to begin:</p>
      <input onChange={this.handleChange} type="text" placeholder='Username' name="username" value={this.state.username} />
      <select name="difficulty" className="difficulty-select" onChange={this.handleChange}>
        {this.state.options.map(level => <option key={level.level} value={level.guesses}>{`${level.level} - ${level.guesses} Guesses`}</option>)}
      </select>
      <button name="login" onClick={this.login} value="submit">Start Game</button>
      </div>
    )
  }

}

export default Login
