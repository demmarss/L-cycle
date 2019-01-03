import React, {Component} from 'react'
import SetQuestionNumber from './setQuNum'
import QuestionDisplay from './displayQu'
import { connect } from 'react-redux'
import ResultDisplay from './displayResult'
import ReviewDisplay from './displayReview'
import {handleCreateTask} from '../../actions/tasks'

class Addition extends Component {
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
                    topic: 'Addition',
                    user: authedUser._id,
                    questions: questions,
                    scoreHistory: []
                    }

        dispatch(handleCreateTask(task, lgroupId))
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
            <h1 className="title">Addition</h1>
            {(this.state.status === '')? <SetQuestionNumber qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
            {(this.state.status === 'start')? <QuestionDisplay Questions={this.state.questions} Status={this.setStatus}/>: null}
            {(this.state.status === 'finish')? <ResultDisplay questions={questions} Result={this.generateResult()} Status={this.setStatus}/>: null}
            {(this.state.status ==='review')? <ReviewDisplay questions={questions} answered={answeredQuestions} Status={this.setStatus}/>: null}
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
export default connect(mapStateToProps)(Addition)