import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Login.js'
import Game from './Game.js'
import Scores from './Scores.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game} />
        <Route path="/scores" component={Scores} />
      </div>
    </Router>
  );
}

export default App;
