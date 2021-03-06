import React, { Component } from 'react'
import CluesContainer from "./CluesContainer.js"

class Game extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: this.props.username,
      guess: "",
      code: this.props.code,
      level: this.props.guesses,
      guesses: this.props.guesses,
      clues: [],
      index: 0
    }

    if (this.state.level === "10") {
      this.level = "Hard"
    } else if (this.state.level === "15") {
      this.level = "Intermediate"
    } else if (this.state.level === "20") {
      this.level = "Easy"
    }

  }

  updateGuesses = () => {
    let guessArray = this.state.guess.split("")
    let secondGuessArray = this.state.guess.split("")
    let codeArray = [...this.state.code]
    let newClue = {guess: this.state.guess, correctNumber: 0, correctPosition: 0}
    guessArray.forEach((number, index) => {
      if (codeArray[index] === Number(number)){
        newClue.correctPosition ++
        secondGuessArray[index] = "O"
        codeArray[index] = "X"
      }
    })
    secondGuessArray.forEach(number => {
      if (codeArray.includes(Number(number))){
        newClue.correctNumber ++
        codeArray[codeArray.indexOf(Number(number))] = "X"
      }
    })
    this.setState({...this.state, guess: "", guesses: this.state.guesses - 1, clues: [...this.state.clues, newClue], index: this.state.clues.length})
  }

  checkCode = (event) => {
    event.preventDefault()
    if (!Number(this.state.guess) || this.state.guess.length !== 4){
      alert("Invalid Code! Please enter a 4 digit number.")
    } else {
      if (this.state.guess === this.state.code.join('')) {
        this.calculateScore()
      } else {
        this.updateGuesses()
      }
    }
  }

  calculateScore = () => {
    let seconds = Number(document.querySelector(".hidden-div").innerText)
    let score = ((this.state.guesses - 1) * this.state.level) * seconds
    let userObj = { user: this.state.username, score: score }
    this.sendScore(userObj).then(this.props.highScores).then(() => this.props.history.push("/scores"))
  }

  sendScore = (userObj) => {
    return fetch("http://localhost:3000/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
  }

  handleChange = event => {
    this.setState({...this.state, guess: event.target.value})
  }

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push('/')
    }
  }

  componentDidUpdate() {
    if (this.state.guesses === 0) {
      this.props.history.push("/lose")
    }
  }

  render = () => {
    return (
      <div className="game-container">
        <div className="guess-container">
        <h3>Level - {this.level}</h3>
        <p>{this.state.username}, you have {this.state.guesses} guesses remaining.</p>
        <p>Please enter a 4 digit code below:</p>
        <form className="guess-form" onSubmit={this.checkCode}>
        <input name="guess" placeholder="Enter Code Here..." value={this.state.guess} onChange={this.handleChange} />
        <button name="submit" value="submit">Enter</button>
        </form>
        <CluesContainer clues={this.state.clues}/>
        </div>
      </div>
    )
  }

}

export default Game
