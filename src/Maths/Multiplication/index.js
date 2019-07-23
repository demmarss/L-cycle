import React, {Component} from 'react'
import SetQuestionNumber from './setQuNum'
import TaskCreated from '../../taskCreatedMessage'
import {handleCreateTask} from '../../actions/tasks'
import { connect } from 'react-redux'

class Multiplication extends Component {
    state = {
        status: "",
        questions: [],
        answeredQuestions:[],
        lgroupId: ""
      }

      setStatus = (passedstatus, questions = this.state.questions, answeredQuestions = this.state.answeredQuestions, lgroupId="") => {
        this.setState({
            status: passedstatus,
            questions: questions,
            answeredQuestions: answeredQuestions,
            lgroupId: lgroupId
        })

        const { dispatch, authedUser } = this.props;
        let task = {
                    topic: 'Multiplication',
                    user: authedUser._id,
                    questions: questions,
                    scoreHistory: []
                    }

        dispatch(handleCreateTask(task, lgroupId))
    }

    setQuestions = (q) => {

        this.setState({
            questions: this.state.questions.concat(q)
        })
    }

    generateResult = () =>{

        let correct = this.state.answeredQuestions.filter(x => x.remark === 'correct').length

        let result = correct* 100/this.state.answeredQuestions.length



        return result + '%'
    }

      render() {
        const {questions, answeredQuestions} = this.state;
        return (
          <div className="App">
            <h1>Multiplication</h1>
            <br/>
            {(this.state.status === '')? <SetQuestionNumber qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
            {(this.state.status === 'submit')? <TaskCreated qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
          </div>
        );
      }

}
function mapStateToProps({ authedUser, learningCycle}) {
    return {
      authedUser,
      learningCycle
    };
  }
export default connect(mapStateToProps)(Multiplication)