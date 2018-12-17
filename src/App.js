import React, { Component } from 'react';
import Navigation from './Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navigation />

        </div>
      </Router>

    );
  }
}

export default App;
