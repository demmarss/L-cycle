import React, {Component} from 'react'

class Result extends Component {
    render(){
        return(
            <div>
                <h1>V6 Create New Task Landing Page </h1>
                <article className="message is-info">
                    <div className="message-header">
                        <p>Task Title</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        Graph appear here
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </article>
                <div className="field">
                    <p className="control">
                        <button className="button is-success">
                        Try Again
                        </button>
                    </p>
                </div> 
            </div>
        )
    }
}

export default Result