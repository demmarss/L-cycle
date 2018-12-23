import React, { Component } from 'react'

export default class QuestionDisplay extends Component {
    state = {
        answer: '',
        counter: 0,
        newAnsweredQuestion: []
    }

    handleChange = (e) =>{
        this.props.Questions[this.state.counter].typedAnswer = e.target.value 
    }

    handleSubmit = (e) =>{
        
        this.setState({
            newAnsweredQuestion: this.state.newAnsweredQuestion.concat(this.props.Questions[this.state.counter]),
            counter: this.state.counter + 1,
            answer: Number
        })

        e.target.reset()
        
        e.preventDefault()
    }

    handleFinish = (e) =>{

        this.generateQuestionWithRemark(this.state.newAnsweredQuestion)
        
        this.props.Status('finish', this.props.Questions, this.state.newAnsweredQuestion)
        e.preventDefault()
    }

    generateQuestionWithRemark = (newAnsweredQuestion)=>{
        newAnsweredQuestion.map(x => (x.typedAnswer == x.answer)? (x.remark = 'correct') : (x.remark = 'wrong'))
    }
    isEmpty() {
        return this.state.typedAnswer === "";
      }
    render (){
        return (
            <div>

                {(this.state.counter < this.props.Questions.length)? 
                    (<form onSubmit={this.handleSubmit}>
                        <h1>{this.props.Questions[this.state.counter].number1}</h1>
                        <h1> - {this.props.Questions[this.state.counter].number2} </h1>
                        <input type="number" placeholder="Enter answer" onInput={this.handleChange}/>
                        <br/>
                        <button type='submit' className="button is-success" disabled={this.isEmpty()}>Submit</button>
                    </form>)
                    :<p className="button is-success" onClick={this.handleFinish}>Click to see result</p>
                }
                
                
            </div>
        )    
}





//   task.words = this.state.words,
//   task.parentAuthor= 'This current author',
//   task.lcycleId = 'Add this learning cycle'
//   task.currentAuthor= 'get current user',
//   task.ParentTaskId= '',
//   task.scoreHistory= []