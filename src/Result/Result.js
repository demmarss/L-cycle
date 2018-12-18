import React, {Component} from 'react'

class Result extends Component {
    render(){
        return(
            <div>
                <h1>V6 Create New Task Landing Page </h1>
                <article class="message is-info">
                    <div class="message-header">
                        <p>Task Title</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        Graph appear here
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </article>
                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                        Try Again
                        </button>
                    </p>
                </div> 
            </div>
        )
    }
}

export default Result