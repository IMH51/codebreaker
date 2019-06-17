import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Login.js'
import Game from './Game.js'
import Scores from './Scores.js'

const initialState = {
  username: null,
  score: 0,
  code: null,
  level: null,
  guesses: 0
}

class App extends Component {

  constructor() {
    super()

    this.state = initialState

    this.difficulty = null

  }

  calculateScore = () => {
    console.log("Correct Guess!")
  }

  updateGuesses = () => {
    console.log("Incorrect Guess!")
  }

  checkCode = (code) => {
    if (!Number(code) || code.length != 4){
      alert("Invalid Code! Please enter a 4 digit number.")
    } else {
      if (this.state.code.join('') === code) {
        this.calculateScore()
      } else {
        this.updateGuesses()
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
          <Route path="/game" component={props => <Game {...props} username={this.state.username} guesses={this.state.guesses} level={this.state.level} checkCode={this.checkCode}/>} />
          <Route path="/scores" component={props => <Scores {...props} />} />
        </div>
      </Router>
    )
  }

}

export default App;
