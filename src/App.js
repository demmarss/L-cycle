import React, { Component } from 'react';
import Navigation from './Navigation'
import LandingPage from './LandingPage/LandingPage'
import TaskList from './Task/TaskList'
import ResultList from './Result/ResultList'
import ClassList from './L_Cycle/L-CycleList'
import SignUp from './user/CreateAcct'
import LogIn from './user/LogIn';
import MyAccount from './user/UserAcctDetail';
import ForgotPassword from './user/ForgotPassword'
import Question from './Question/Question'
import Task from './Task/Task'
import Subtraction from './Maths/Subtraction/subtraction'
import { connect } from 'react-redux'
// import handleInitialData from './actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  // componentDidMount(){
  //   this.props.dispatch(handleInitialData())
  //   }

  render() {

    return (
      <Router>
        <div className="App container">
          <Navigation />
          <br/>
          <Route exact path="/" component={LandingPage} />
          <div className="columns is-mobile is-centered">
            <div className="column is-10-mobile is-6-tablet is-6-desktop is-4-fullhd">
              <Route exact path="/myTask" component={TaskList} />
              <Route exact path="/myResult" component={ResultList} />
              <Route exact path="/myClass" component={ClassList} />

              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/logIn" component={LogIn} />
              <Route exact path="/myAccount" component={MyAccount} />
              <Route exact path="/forgotPassword" component={ForgotPassword}/>
              <Route exact path ='/question' component={Question} />
              <Route exact path ='/task' component={Task} />
              <Route exact path='/subtraction' component = {Subtraction}/>
          </div>
        </div>

        </div>
      </Router>

    );
  }
}

export default connect()(App);
