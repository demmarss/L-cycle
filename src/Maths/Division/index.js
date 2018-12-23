import React, {Component} from 'react'
import SetQuestionNumber from './setQuNum'
import QuestionDisplay from './displayQu'
import ResultDisplay from './displayResult'
import ReviewDisplay from './displayReview'

export default class Subtraction extends Component {
    state = {
        status: "",
        questions: [],
        answeredQuestions:[]
      }

    setStatus = (passedstatus, questions = this.state.questions, answeredQuestions = this.state.answeredQuestions) => {
        this.setState({
            status: passedstatus,
            questions: questions,
            answeredQuestions: answeredQuestions
        })
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
            <h1 className='title'>Division</h1>
            <br/>
            {(this.state.status === '')? <SetQuestionNumber qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
            {(this.state.status === 'start')? <QuestionDisplay Questions={this.state.questions} Status={this.setStatus}/>: null}
            {(this.state.status === 'finish')? <ResultDisplay questions={questions} Result={this.generateResult()} Status={this.setStatus}/>: null}
            {(this.state.status ==='review')? <ReviewDisplay questions={questions} answered={answeredQuestions} Status={this.setStatus}/>: null}
          </div>
        );
      }

}
