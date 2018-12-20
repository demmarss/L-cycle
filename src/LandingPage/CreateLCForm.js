import React, {Component} from 'react'

class CreateLCForm extends Component {
    render (){
        return (
            <div>
                <article className="message is-success">
                    <div className="message-header">
                        <p>Create L-Cycle</p>
                    </div>
                    <div className="message-body">
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Enter username"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Enter L-cycle title"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-warning">
                                Click to Create
                                </button>
                            </p>
                        </div>  
                    </div>
                </article>
            </div>
        )
    }
}

export default CreateLCForm