import React, { Component } from 'react';


class Question extends Component {
    state = {
      answer: '',
      qNum: 0,
      onEnd: false,
    }

    handleChange = event =>{

        const { value } = event.target;

        this.setState({

            answer : value

        })

    }

    handleSubmit = event => {

        this.setState({
            qNum: this.state.qNum +1,
        })
        
        event.preventDefault();

        if (this.state.qNum = this.props.Questions.length){
            this.setState({onEnd: true}) 
            this.props.reStart(false) 
        } else {
            this.setState({onEnd: false})
        }
    }

    render() {
        return(
            <div>
                {(this.state.qNum < this.props.Questions.length)? 
                    <div>
                        <h4 key={this.state.qNum}>{this.props.Questions[this.state.qNum].number1} - {this.props.Questions[this.state.qNum].number2} =
                            <input type="text" name={this.state.qNum} onChange={this.handleChange}/>
                        </h4>
                        <p class="button is-warning" onClick={this.handleSubmit}>Submit</p>
                    </div>
                    
                    : (this.state.onEnd)? 
                    "Your Result is ...." : "No question set"}
            </div>
        )
    }


}

export default Question