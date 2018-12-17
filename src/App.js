import React, { Component } from 'react';
import Navigation from './Navigation'
import LandingPage from './LandingPage/LandingPage'
import LCycle from './L_Cycle/L-Cycle'
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
          {/* Just temporary placement until routing if done */}
          <LCycle/>
        </div>

        
      </Router>

    );
  }
}

export default App;
