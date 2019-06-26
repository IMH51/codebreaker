import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './Login.js'
import Game from './Game.js'
import Scores from './Scores.js'
import TimerContainer from "./TimerContainer.js"

const initialState = {
  username: null,
  guesses: null

}

class App extends Component {

  constructor() {
    super()

    this.state = initialState

    this.code = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]
  }



  login = (username, guesses) => {
    this.setState({ username: username, guesses: guesses})
  }

  calculateScore = () => {
    console.log("Correct!")
  }

  render = () => {
    return (
      <div className="master-container">
        <h1>CodeBreaker</h1>
        <Router>
          <div className="App">
            <Route exact path="/" component={props => <Login {...props} login={this.login}/>} />
            <Route path="/game" component={props => {
                return(
                  <div className="game-container">
                    <Game {...props} className="game-div" code={this.code} guesses={this.state.guesses} username={this.state.username} calculateScore={this.calculateScore}/>
                    <TimerContainer {...props} className="timer-div" guesses={this.state.guesses} calculateScore={this.calculateScore}/>
                  </div>
                  )
                }
              }/>
            <Route path="/scores" component={props => <Scores {...props} />} />
          </div>
        </Router>
      </div>
    )
  }

}

export default App;
