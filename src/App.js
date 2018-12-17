import React, { Component } from 'react';
import Navigation from './Navigation'
import CreateLC from './CreateLC'
import JoinLC from './JoinLC'
import TaskList from './TaskList'
import CreateLCForm from './CreateLCForm'
import JoinLCForm from './JoinLCForm'
import DisplayTaskLists from './displayTaskList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  state ={
    toCreat: false,
    toJoin: false,
    toDisplayTask: false
  }

  toggle = (x,y,z) =>{

    (this.state[y] ==true || this.state[z] == true)? (
      this.setState({
        [x] : !this.state[x],
        [y] : false,
        [z]: false
      })
    ): (
      this.setState({
        [x] : !this.state[x],
      })
    ) 

    
  }

  render() {
    return (
      <Router>
        <div className="App container">
          <Navigation />
          <br/>
          <div class="columns is-centered">
              <div class="column">
                <CreateLC toggle={this.toggle}/>
              </div>
              <div class="column">
                <JoinLC toggle={this.toggle}/>
              </div>
              <div class="column">
                <DisplayTaskLists toggle={this.toggle}/>
              </div>
          </div>
          <div class="columns is-mobile is-centered">
            <div class="column is-10-mobile is-6-tablet is-4-desktop is-4-fullhd">
            {(this.state.toCreat)? <CreateLCForm/>: null}
            {(this.state.toJoin)? <JoinLCForm/>: null}
            {(this.state.toDisplayTask)? <TaskList/>: null}
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
