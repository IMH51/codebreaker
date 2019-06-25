import React, { Component } from 'react'

class Timer extends Component {

    constructor(props) {
      super(props);
      this.state = { seconds: Number(this.props.time) };
      }

    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
          }));
        }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <div>
          {this.state.seconds}
        </div>
        );
      }

  // componentDidMount() {
  //   setInterval(() => {
  //     let timer = document.querySelector("#timer-seconds")
  //     let number = Number(timer.innerText)
  //     timer.innerText = number - 1
  //   }, 1000)
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.time !== this.props.time){
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  //
  // render = () => {
  //   return(
  //     <p id="timer-seconds">{this.props.time}</p>
  //   )
  // }
}

export default Timer
