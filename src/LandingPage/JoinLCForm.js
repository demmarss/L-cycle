import React, {Component} from 'react'

class JoinLCForm extends Component {
    render (){
        return (
            <div>
                <article className="message is-primary">
                    <div className="message-header">
                        <p>Join L-Cycle</p>
                    </div>
                    <div className="message-body">
                    <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Enter L-cycle Code"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-success">
                                Click to Join
                                </button>
                            </p>
                        </div>  
                    </div>
                </article>
            </div>
        )
    }
}

export default JoinLCForm