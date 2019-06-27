import React, { Component } from 'react';
import Scores from "./Scores.js"

class ScoresContainer extends Component {

  render = () => {
    return (
    <div className="scores-container">
      <Scores selection={this.props.selection} current={this.props.current} resetApp={this.props.resetApp}/>
    </div>
    )
  }

}

export default ScoresContainer
