import React, { Component } from 'react'
import Clue from "./Clue.js"

class CluesContainer extends Component {

  render = () => {
    return(
      <div className="clues-container">
        {this.props.index > 0 ? <Clue clue={this.props.clue} index={this.props.index} /> : null }
        {this.props.index > 1 ?
          <div className="buttons">
          <button className="prev-button" onClick={this.decreaseIndex}>Previous Clue</button>
          <button className="next-button" onClick={this.increaseIndex}>Next Clue</button>
          </div>
          :  null }
      </div>
    )
  }

}

export default CluesContainer
