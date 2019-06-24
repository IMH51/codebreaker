import React, { Component } from 'react'

class Timer extends Component {

  render = () => {
    return(
      <p id="timer-seconds">{this.props.time}</p>
    )
  }
}

export default Timer
