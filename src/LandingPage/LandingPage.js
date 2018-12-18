import React, { Component } from 'react';
import CreateLC from './CreateLC'
import JoinLC from './JoinLC'
import CreateTask from '../Task/CreateTaskLandingPage'
import CreateLCForm from './CreateLCForm'
import JoinLCForm from './JoinLCForm'
import DisplayCreateTask from './DisplayCreateTask'

class LandingPage extends Component {
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
        <div>
          <br/>
          V1 Landing Page view
          <div class="tabs is-centered">
            <ul>
              <li ><CreateLC toggle={this.toggle}/></li>
              <li><JoinLC toggle={this.toggle}/></li>
              <li><DisplayCreateTask toggle={this.toggle}/></li>
            </ul>
          </div>
          <div class="columns is-mobile is-centered">
            <div class="column is-10-mobile is-6-tablet is-4-desktop is-4-fullhd">
            {(this.state.toCreat)? <CreateLCForm/>: null}
            {(this.state.toJoin)? <JoinLCForm/>: null}
            </div>
          </div>
          {(this.state.toDisplayTask)? <CreateTask/>: null}
        </div>
    );
  }
}

export default LandingPage;
