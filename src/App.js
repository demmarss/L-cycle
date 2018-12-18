import React, { Component } from 'react';
import Navigation from './Navigation'
import LandingPage from './LandingPage/LandingPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App container">
          <Navigation />
          <br/>
          <LandingPage />
          <hr/>
          <br/>
        </div>

        
      </Router>

    );
  }
}

export default App;
