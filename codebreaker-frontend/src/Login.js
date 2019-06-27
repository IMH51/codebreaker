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

  }

  handleChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value })
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.props.login(this.state.username, this.state.guesses)
    this.props.history.push("/game")
  }

  render = () => {
    return (
      <div className="login-container">
      <p>Try and guess the 4 digit code before you run out of time or guesses!</p>
      <p>Please enter your name and choose a difficulty level to begin:</p>
      <form className='login-form' onSubmit={this.handleLogin}>
        <input onChange={this.handleChange} type="text" placeholder='Username' name="username" value={this.props.username} />
        <select name="guesses" onChange={this.handleChange} className="difficulty-select" >
          {this.options.map(level => <option key={level.level} name={level.level} value={level.guesses}>{`${level.level} - ${level.guesses} Guesses, ${(level.guesses * 30) / 60} Minutes`}</option>)}
        </select>
        <button name="login"  value="submit">Start Game</button>
      </form>
      </div>
    )
  }

}

export default Login
