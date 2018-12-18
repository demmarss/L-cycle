import React, {Component} from 'react'

class CreateLCForm extends Component {
    render (){
        return (
            <div>
                <article class="message is-success">
                    <div class="message-header">
                        <p>Create L-Cycle</p>
                    </div>
                    <div class="message-body">
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Enter username"/>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Enter L-cycle title"/>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-warning">
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