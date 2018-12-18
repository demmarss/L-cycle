import React, {Component} from 'react'

class JoinLCForm extends Component {
    render (){
        return (
            <div>
                <article class="message is-primary">
                    <div class="message-header">
                        <p>Join L-Cycle</p>
                    </div>
                    <div class="message-body">
                    <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Enter L-cycle Code"/>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-success">
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