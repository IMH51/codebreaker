import React, { Component } from 'react'
import Timer from "./Timer.js"

class TimerContainer extends Component {

  render = () => {

    return (
      <div className="timer-div">
        <Timer time={this.props.guesses * 30} />
      </div>
    )
  }
}

export default TimerContainer
