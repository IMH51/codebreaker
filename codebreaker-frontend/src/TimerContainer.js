import React, { Component } from 'react'
import Timer from "./Timer.js"

class TimerContainer extends Component {


  constructor(props) {
    super(props)
    this.state = {seconds: this.props.guesses * 30 }
  }

  componentDidMount() {
    this.initialSeconds = this.state.seconds
    setInterval(this.timer, 1000)
  }

  timer = () => {
    this.setState({seconds: this.state.seconds-1})
  }

  render = () => {
    return(
      <Timer time={this.state ? this.state.seconds : ""} />
    )
  }
}

export default TimerContainer
