import React, {Component} from 'react'

class CreateLCForm extends Component {
    render (){
        return (
            <div>
                <div class="card">
                    <header class="card-header">
                        <h2 class="title is-4">Create L-Cycle</h2>
                    </header>
                    <div class="card-content">
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
                </div>
            </div>
        )
    }
}

export default CreateLCForm