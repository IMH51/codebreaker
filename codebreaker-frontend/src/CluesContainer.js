import React, { Component } from 'react'
import Clue from "./Clue.js"

class CluesContainer extends Component {

  render = () => {
    return(
      <div className="clues-container">
        {this.props.clues.length > 3 ? <p>Scroll down for previous clues:</p> : <p>Your clues will appear below:</p>}
        {this.props.clues.map((clue, index) => <Clue clue={clue} index={index} key={index} />).reverse()}
      </div>
    )
  }

}

export default CluesContainer
