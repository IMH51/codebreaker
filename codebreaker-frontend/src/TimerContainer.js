import React, { Component } from 'react'
import Timer from "./Timer.js"

class TimerContainer extends Component {

  render = () => {

    return (
      <div className="timer-div">
        <Timer time={10} calculateScore={this.props.calculateScore}/>
      </div>
    )
  }
}

export default TimerContainer
