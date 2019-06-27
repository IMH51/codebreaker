import React, { Component } from 'react'
import Timer from "./Timer.js"
import ReactCountdownClock from 'react-countdown-clock'

class TimerContainer extends Component {

  timeOut = () => {
    this.props.history.push("/lose")
  }

  render = () => {

    return (
      <div className="timer-div">
        <h2 className="timer-h2">Time Remaining:</h2>
        <ReactCountdownClock className="countdown-timer" seconds={this.props.guesses * 30} onComplete={this.timeOut}/>
        <Timer time={this.props.guesses * 30} setSeconds={this.props.setSeconds}/>
      </div>
    )
  }
}

export default TimerContainer
