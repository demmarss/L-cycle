import React, {Component} from 'react'

class Question extends Component {

    state = {
        startTime: Date.now(),
        endTime: Date.now()
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

        var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " min, " : " min ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
        return hDisplay + mDisplay + sDisplay; 
    }
    
    render(){
        return(
            <div>
                <h1>V5 Create New Task Landing Page </h1>
                <p>Time spent : {this.getTimeDuration()}</p>

                <article class="message is-link">
                    <div class="message-header">
                        <p>Question number</p>
                        
                    </div>
                    <div class="message-body">
                        Question here
                    </div>
                </article>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" onClick={this.handleFinish}>
                        Submit
                        </button>
                    </p>
                </div> 
            </div>
        )
    }
}

export default Question