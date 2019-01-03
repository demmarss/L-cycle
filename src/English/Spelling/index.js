import React, {Component} from 'react'
import SetQuestion from './createTask'
import QuestionDisplay from './displayQu'
import ResultDisplay from './displayResult'
import ReviewDisplay from './displayReview'
import onCreateQuestions from './SpellingService'

export default class Spelling extends Component {
    state = {
        status: "",
        questions: [],
        realQuestions: [],
        answeredQuestions:[]
      }

    setStatus = (passedstatus, questions = this.state.questions, answeredQuestions = this.state.answeredQuestions) => {

        this.setState({
            status: passedstatus,
            questions: questions,
            realQuestions: onCreateQuestions(questions),
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
        const {realQuestions, questions, answeredQuestions} = this.state;
        console.log(realQuestions)
        return (
          <div className="App">
            <h1 className='title'>Spelling</h1>
            <br/>
            {(this.state.status === '')? <SetQuestion Status={this.setStatus}/> : null}
            {(this.state.status === 'start')? <QuestionDisplay RealQuestions={realQuestions} Questions={questions} Status={this.setStatus}/>: null}
            {(this.state.status === 'finish')? <ResultDisplay RealQuestions={realQuestions} questions={questions} Result={this.generateResult()} Status={this.setStatus}/>: null}
            {(this.state.status ==='review')? <ReviewDisplay  RealQuestions={realQuestions} questions={questions} answered={answeredQuestions} Status={this.setStatus}/>: null}
          </div>
        );
      }

}
