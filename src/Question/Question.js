import React, {Component} from 'react'

class Question extends Component {
    render(){
        return(
            <div>
                <h1>V5 Create New Task Landing Page </h1>
                Progress bar
                <article class="message is-link">
                    <div class="message-header">
                        <p>Question number</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        Question here
                    </div>
                </article>
                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                        Submit
                        </button>
                    </p>
                </div> 
            </div>
        )
    }
}

export default Question