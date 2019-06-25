import React, { Component } from 'react'
import Clue from "./Clue.js"

class CluesContainer extends Component {

  render = () => {
    return(
      <div className="clues-container">
        {this.props.clues.map((clue, index) => <Clue key={index} clue={clue} index={index} />)}
      </div>
    )
  }

}

export default CluesContainer
