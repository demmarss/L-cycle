import React, {Component} from 'react'

class DisplayInivteMember extends Component {

    render (){
        return(
            <div class="field">
                <p class="control">
                    <button class="button is-success" onClick={this.props.inviteMember}>
                    Invite Member
                    </button>
                </p>
            </div>
        )
    }
}

export default DisplayInivteMember