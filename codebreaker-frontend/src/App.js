import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './Login.js'
import Game from './Game.js'
import ScoresContainer from './Scores.js'
import TimerContainer from "./TimerContainer.js"
import Lose from "./Lose.js"

const initialState = {
  username: null,
  guesses: null,
  selection: null,
  current: null
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

  resetApp = () => {
    this.setState(initialState)
  }

  highScores = async () => {
    const scores = await fetch("http://localhost:3000/scores")
    const data = await scores.json()
    this.setState({...this.state, selection: data.sort((a,b) => b.score - a.score).slice(0, 10), current: data.sort((a,b) => b.id - a.id)[0]})
  }

  render = () => {
    return (
      <div className="master-container">
        <h1 className="h1-header">CodeBreaker</h1>
        <Router>
          <div className="App">
            <Route exact path="/" component={props => <Login {...props} login={this.login}/>} />
            <Route path="/game" component={props => {
                return(
                  <div className="game-container">
                    <Game {...props} className="game-div" code={this.code} guesses={this.state.guesses} username={this.state.username} highScores={this.highScores} />
                    <TimerContainer {...props} className="timer-div" guesses={this.state.guesses} />
                  </div>
                  )
                }
              }/>
            <Route path="/scores" component={props => <ScoresContainer {...props} selection={this.state.selection} current={this.state.current} resetApp={this.resetApp}/>} />
            <Route path="/lose" component={props => <Lose {...props} resetApp={this.resetApp}/>} />
          </div>
        </Router>
      </div>
    )
  }

}

export default App;
