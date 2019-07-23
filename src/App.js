import React, { Component } from 'react';
import Navigation from './Navigation'
import LandingPage from './LandingPage/LandingPage'
import TaskList from './Task/TaskList'
import ProgressList from './Progress/progressList'
import QuestionAnalysis from './QuestionAnalysis'
import ClassList from './L_Cycle/L-CycleList'
import SignUp from './user/CreateAcct'
import LogIn from './user/LogIn';
import MyAccount from './user/UserAcctDetail';
import ForgotPassword from './user/ForgotPassword'
import Question from './Question/Question'
import TaskDetail from './Task/TaskDetails'
import Subtraction from './Maths/Subtraction'
import Addition from './Maths/Addition'
import Multiplication from './Maths/Multiplication'
import Division from './Maths/Division'
import Reading from './Language/Reading'
import CreatTaskLandingPg from './Task/CreateTaskLandingPage'

import AdditionQuestion from './Maths/Addition/displayQu'
import DivisionQuestion from './Maths/Division/displayQu'
import MultiplicationQuestion from './Maths/Multiplication/displayQu'
import SubtractionQuestion from './Maths/Subtraction/displayQu'
import SpellingQuestion from './English/Spelling/displayQu'
import ReadingPicMatchingQuestion from './Language/Reading/displayQuRPicMatching'
import ReadingTextOutQuestion from './Language/Reading/displayQuRTextOut'

import EvaluationReadingOutPictures from './Language/Reading/displayEvaluationRTextOut'

import { connect } from 'react-redux'
import LCycleDetail from './L_Cycle/L-CycleDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Spelling from './English/Spelling';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="container">
          <Navigation />
          <br/>
          <Route exact path="/" component={LandingPage} />
          
            <div className="container column is-centered is-10-mobile is-6-tablet is-6-desktop">
              <Route exact path="/myTask" component={TaskList} />
              <Route exact path="/task/:taskId" component={TaskDetail} />
              <Route exact path="/myProgress" component={ProgressList} />
              <Route exact path="/myQuestionAnalysis" component={QuestionAnalysis} />
              <Route exact path="/myClass" component={ClassList} />
              <Route exact path="/lgroups/:lgroupId" component={LCycleDetail} />

              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/logIn" component={LogIn} />
              <Route exact path="/myAccount" component={MyAccount} />
              <Route exact path="/forgotPassword" component={ForgotPassword}/>

              <Route exact path ='/question' component={Question} />

              {/* Loading topics landing page */}
              <Route exact path ='/creatTaskLandingPg' component={CreatTaskLandingPg} />

              {/* Loading question setting pages */}
              <Route exact path='/subtraction' component = {Subtraction}/>
              <Route exact path='/addition' component = {Addition}/>
              <Route exact path='/multiplication' component = {Multiplication}/>
              <Route exact path='/division' component = {Division}/>
              <Route exact path='/spelling' component = {Spelling}/>
              <Route exact path='/reading' component = {Reading}/>

              {/* Loading Question dispaly pages */}
              <Route exact path='/Additionquestion/:taskId' component = {AdditionQuestion}/>
              <Route exact path='/Divisionquestion/:taskId' component = {DivisionQuestion}/>
              <Route exact path='/Multiplicationquestion/:taskId' component = {MultiplicationQuestion}/>
              <Route exact path='/Subtractionquestion/:taskId' component = {SubtractionQuestion}/>
              <Route exact path='/Spellingquestion/:taskId' component = {SpellingQuestion}/>
              <Route exact path='/ReadingMachingTextquestion/:taskId' component = {ReadingPicMatchingQuestion}/>
              <Route exact path='/ReadingTextOutquestion/:taskId' component = {ReadingTextOutQuestion}/>

              {/* Loading Evaluation dispaly pages */}
              <Route exact path='/ReadingTextOutevaluation/:taskId/:lgroupId' component = {EvaluationReadingOutPictures}/>
          </div>
        
        </div>
      </Router>
    );
  }
}

export default connect()(App);
