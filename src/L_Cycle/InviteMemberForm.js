import React, {Component} from 'react'

class InviteMember extends Component {
    render (){
        return (
            <div>
                <div class="card">
                    <header class="card-header">
                        <h2 class="title is-4">Invite Member</h2>
                    </header>
                    <div class="card-content">
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Enter username or email separted by comma"/>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-warning">
                                Send invitation
                                </button>
                            </p>
                        </div>                  
                    </div>
                </div>
            </div>
        )
    }
}

export default InviteMember