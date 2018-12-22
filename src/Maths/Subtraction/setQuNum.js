import React, { Component } from 'react'

class SetQuestionNumber extends Component {

    state = {
        questionNumber: 0,
    }

    handleChange = (e) =>{
        this.setState({
            questionNumber: e.target.value
        })
    }

    handleSubmit = (e)=>{
        
        let questions = this.generateQuestions(this.state.questionNumber)
        console.log(questions)
        this.props.Status('start', questions)

        this.setState({
            questionNumber: 0
        })

        e.preventDefault()
    }

    generateQuestions = (n) => {
        let questions =[]
        for (var i = 0; i < n; i++){
            questions.push(this.questionModel())   
        }
        return questions
    }

    questionModel() {
        let x = Math.floor(Math.random() * 11) + 9
        let y = Math.floor(Math.random() * 10)
        let question=  {
                                number1: x,
                                number2: y,
                                answer: x - y,
                                typedAnswer: Number,
                                remark: ''
                                }
        return question
    }



    render(){
        return (
            <div>
                <form >
                    <input 
                        type="number" 
                        placeholder='Enter number of question'
                        onChange={this.handleChange}
                        value={this.state.questionNumber}
                    />
                    <br/>
                    <br/>
                    <p className="button is-success" type='submit' onClick={this.handleSubmit}>Start</p>  
                </form>
            </div>
        )
    }

}

export default SetQuestionNumber

