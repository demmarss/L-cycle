import React, { Component } from 'react'
import { Line } from 'rc-progress';

class QuestionDisplay extends Component {

    state = {
        answer: Number,
        counter: 0,
        newAnsweredQuestion: [],
        startTime: Date.now(),
        endTime: Date.now(),
        progress: 0,
        submit: true
    }

    handleChange = (e) =>{
        this.props.Questions[this.state.counter].typedAnswer = e.target.value
        
        this.setState({
            submit: false
        })
    }

    handleSubmit = (e) =>{
        this.setState({
            newAnsweredQuestion: this.state.newAnsweredQuestion.concat(this.props.Questions[this.state.counter]),
            counter: this.state.counter + 1,
            progress: (this.state.counter + 1) *100/this.props.Questions.length,
            answer: Number,
            submit: true,
            endTime: Date.now()
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
    
    getTimeDuration = () => {
        let duration = this.state.endTime - this.state.startTime
        return this.secondsToHms(Math.floor(duration/1000))
    }
    
    secondsToHms=(d)=> {
    
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h === 1 ? " h, " : " h ") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? " min, " : " min ") : "";
        var sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
        return hDisplay + mDisplay + sDisplay; 
    }
    render (){
        return (
            <div>
                
                <Line percent={this.state.progress} strokeWidth="4" strokeColor="#ff45ff" />
                {(this.state.counter < this.props.Questions.length)? 
                    (<form onSubmit={this.handleSubmit}>
                        <article className="message is-link">
                            <div className="message-header">
                                <p>Time spent : {this.getTimeDuration()}</p>          
                            </div>
                            <div className="message-body has-text-right title">
                                <h1>{this.props.Questions[this.state.counter].number1}</h1>
                                <h1> x {this.props.Questions[this.state.counter].number2} </h1>
                                <input className="input title" type="number" placeholder="=" onInput={this.handleChange}/>
                                <br/>
                            </div>
                        </article>
                        <div className="field">
                            <p className="control">
                                <button type='submit' className="button is-success is-fullwidth" disabled={this.state.submit}>Submit</button>
                            </p>
                        </div> 
                    </form>)
                    :<p className="button is-success " onClick={this.handleFinish}>Click to see result</p>
                }  
            </div>
        )    
    }

}

export default QuestionDisplay
