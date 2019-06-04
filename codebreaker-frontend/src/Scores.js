import React, { Component } from 'react';

class Scores extends Component {

  constructor() {
    super()

    this.scoresURL = "route"

    this.state = null

  }

  highScores = () => {
    return fetch(this.scoresURL)
    .then(resp => resp.json())
    .then(data => {
      data.sort(user => user.score).slice(0, 4)
    })
  }

  render = () => {
    return (<h1>Scores Component Rendered</h1>)
  }

}

export default Scores
