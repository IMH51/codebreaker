import React, { Component } from 'react'
import Timer from "./Timer.js"

class TimerContainer extends Component {

  setCounter = () => {
  let counter = 0
  switch (this.props.level) {
    case "Easy":
      counter = 600
      break
    case "Intermediate":
      counter = 450
      break
    case "Hard":
      counter = 300
      break
    default:
      counter = 0
    }
  return counter
  }

  render = () => {

    return (
      <Timer time={this.setCounter()} />
    )
  }
}

export default TimerContainer
