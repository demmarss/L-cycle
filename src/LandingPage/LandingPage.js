import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreateLC from './CreateLC'
import JoinLC from './JoinLC'
import CreateTask from '../Task/CreateTaskLandingPage'
import CreateLCForm from './CreateLCForm'
import JoinLCForm from './JoinLCForm'
import DisplayCreateTask from './DisplayCreateTask'

class LandingPage extends Component {
  
  state = {
    toCreat: false,
    toJoin: false,
    toDisplayTask: false
  }

  toggle = (x,y,z) =>{

    (this.state[y] === true || this.state[z] === true)? (
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

    const { authedUser } = this.props

    console.log (authedUser)

    return (
        <div>
          {authedUser? 
           <div>
             <br/>
          <div className="tabs is-centered">
            <ul>  
              {(authedUser.role === "Teacher")? <li><CreateLC toggle={this.toggle}/></li>: null}
              {(authedUser.role === "Student")? <li><JoinLC toggle={this.toggle}/></li>: null}
              {(authedUser.role === "Teacher")? <li><DisplayCreateTask toggle={this.toggle}/></li>: null}
            </ul>
          </div>
          <div className="columns is-mobile is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop is-4-fullhd">
            {(this.state.toCreat)? <CreateLCForm/>: null}
            {(this.state.toJoin)? <JoinLCForm/>: null}
            </div>
          </div>
          {(this.state.toDisplayTask)? <CreateTask/>: null}
        
        </div>
        : null}
        <div className="hero is-info is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                Learning Management &
              </p>
              <p className="title">
                Student Engagement System
              </p>
            </div>
          </div>
        </div>
          
        </div>
    );
  }
}


function mapStateToProps({ authedUser, learningCycle, task, dispatch, user}) {
  return {
    authedUser,
    learningCycle,
    task,
    dispatch,
    user
  };
}

export default connect(mapStateToProps)(LandingPage)
