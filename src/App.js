import React, { Component } from 'react';
import Navigation from './Navigation'
import CreateLC from './CreateLC'
import JoinLC from './JoinLC'
import TaskList from './TaskList'
import CreateLCForm from './CreateLCForm'
import JoinLCForm from './JoinLCForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Navigation />
          <div class="columns">
              <div class="column">
                <CreateLC/>
              </div>
                
              <div class="column">
                <JoinLC/>
              </div>
          </div>

            <CreateLCForm/>
            <br/>
            <JoinLCForm/>
            <br/>
            <TaskList/>
        </div>
      </Router>

    );
  }
}

export default App;
