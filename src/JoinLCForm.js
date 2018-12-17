import React, {Component} from 'react'

class JoinLCForm extends Component {
    render (){
        return (
            <div>
                <div class="card">
                    <header class="card-header">
                        <h2 class="title is-4">Join L-Cycle</h2>
                    </header>
                    <div class="card-content">
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
                </div>
            </div>
        )
    }
}

export default JoinLCForm