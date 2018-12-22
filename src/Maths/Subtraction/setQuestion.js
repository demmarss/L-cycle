import React, { Component } from 'react';

class SetQuestion extends Component {
    state = {
      numberOfQuestion: 5,
    }
  
    handleSubmit = (event) => {
        let questions =[]
        this.props.SaveQuestion(questions)
        for (var i = 0; i < this.state.numberOfQuestion; i++){
            questions.push(this.generateQuestion())   
        }
        this.props.SaveQuestion(questions)
        event.preventDefault()
    }

    generateQuestion() {
        let questionNumber=  {
                                number1: Math.floor(Math.random() * 11) + 9,
                                number2: Math.floor(Math.random() * 10),
                                answer: '',
                                typedAnswer: '',
                                remark: ''
                                }
        return questionNumber
    }

    startAgain(){
        this.props.saveQuestion([])
        this.props.reStart(true)
    }

    render() {
        return(
            <div>
                {(this.props.Start)? 
                    <div>
                        <h3>Select Topic</h3>
                        <input type="submit" value="Substraction"  onClick={this.handleSubmit}/>
                    </div> :
                    <div>
                        <p className="button is-success" type='submit'onclick={this.startAgain}>Start Again</p>
                    </div>
                }
                
            </div>
        )
    }

}

export default SetQuestion

