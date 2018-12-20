import React, {Component} from 'react'
import { Line } from 'rc-progress';

class Question extends Component {

    state = {
        startTime: Date.now(),
        endTime: Date.now(),
        progress: 25
    }

    handleFinish = () => {
        this.setState({
            endTime: Date.now()
        })
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
    
    render(){
        return(
            <div>
                <h1>V5 Create New Task Landing Page </h1>
                <p>Time spent : {this.getTimeDuration()}</p>
                <Line percent={this.state.progress} strokeWidth="4" strokeColor="#ff45ff" />
                <article className="message is-link">
                    <div className="message-header">
                        <p>Question number</p>
                        
                    </div>
                    <div className="message-body">
                        Question here
                    </div>
                </article>
                <div className="field">
                    <p className="control">
                        <button className="button is-success" onClick={this.handleFinish}>
                            Submit
                        </button>
                    </p>
                </div> 
            </div>
        )
    }
}

export default Question