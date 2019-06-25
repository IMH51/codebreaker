import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Login.js'
import Game from './Game.js'
import Scores from './Scores.js'
import TimerContainer from "./TimerContainer.js"

const initialState = {
  username: null,
  score: 0,
  code: null,
  level: null,
  guesses: 0,
  clues: []
}

class App extends Component {

  constructor() {
    super()

    this.state = initialState

  }

  calculateScore = () => {
    console.log("Correct!")
  }

  updateGuesses = code => {
    let guessArray = code.split("")
    let secondGuessArray = code.split("")
    let codeArray = [...this.state.code]
    let newClue = {guess: code, correctNumber: 0, correctPosition: 0}
    guessArray.forEach((number, index) => {
      if (codeArray[index] === Number(number)){
        newClue.correctPosition ++
        secondGuessArray.splice(index, 1)
        codeArray[index] = "X"
      }
    })
    secondGuessArray.forEach(number => {
      if (codeArray.includes(Number(number))){
        newClue.correctNumber ++
      }
    })
    this.setState({...this.state, guesses: this.state.guesses - 1, clues: [...this.state.clues, newClue], seconds: this.seconds})
  }

  checkCode = (code) => {
    if (!Number(code) || code.length !== 4){
      alert("Invalid Code! Please enter a 4 digit number.")
    } else {
      if (this.state.code.join('') === code) {
        this.calculateScore()
      } else {
        this.updateGuesses(code)
      }
    }
  }

  login = (username, guesses, level) => {
    let code = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]
    this.setState({...this.state, username: username, guesses: guesses, level: level, code: code})
  }

  render = () => {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={props => <Login {...props} login={this.login}/>} />
          <Route path="/game" component={props => {
              return(
                <div>
                <Game {...props} username={this.state.username} guesses={this.state.guesses} level={this.state.level} clues={this.state.clues} checkCode={this.checkCode}/>
                <TimerContainer {...props} level={this.state.level} />
                </div>
                )
              }
            }/>
          <Route path="/scores" component={props => <Scores {...props} />} />
        </div>
      </Router>
    )
  }

}

export default App;
