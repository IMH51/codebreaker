import React, { Component } from 'react'

class Timer extends Component {

    constructor(props) {
      super(props);
      this.state = { seconds: Number(this.props.time) };
      }

    countDown() {
      if (this.state.seconds !== 1) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
          }));
      } else {
          clearInterval(this.interval)
          this.props.calculateScore()
        }
      }

    componentDidMount() {
      this.interval = setInterval(() => this.countDown(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <div>
          Time Remaining: {this.state.seconds}
        </div>
        );
      }

}

export default Timer
