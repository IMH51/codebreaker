import React, { Component } from 'react';

class Game extends Component {

  constructor() {
    super()

    this.state = {
      current_user: null,
      score: 0,
      code: null,
      guesses: 0
    }

  }


  calculateScore = () => {

  }

  updateGuesses = () => {

  }

  checkCode = () => {

  }


  render = () => {
    return (<h1>Game Component Rendered</h1>)
  }

}

export default Game
