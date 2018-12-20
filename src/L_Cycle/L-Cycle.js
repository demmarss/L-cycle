import React, {Component} from 'react'
import DisplayInivteMember from './DisplayInviteMember'
import InviteMember from './InviteMemberForm'
import CreateTaskTrigger from './CreateTaskTrigger'
import LCycleDetail from './L-CycleDetail'

class LCycle extends Component {
    state = {
        showInviteMember: false
    }

    toggleInviteMember = () =>{
        this.setState({
            showInviteMember: !this.state.showInviteMember
        })
    }

    
    render(){
        return (
            <div>
                <h1> V2 A Single Task view</h1>
                <div className="columns is-mobile is-centered">
                <div className="column is-10-mobile is-6-tablet is-4-desktop is-4-fullhd">
                    {/* Details of L-Cycle */}
                    <LCycleDetail />
                    <br/>
                    
                    {/* Button to Link "Routing needed to got to /task/CreateTaskLandingPAge" to create task view */}
                    <CreateTaskTrigger />

                    {/* Button to toggle invite member form*/}
                    <DisplayInivteMember inviteMember={this.toggleInviteMember}/>

                    {/* Form to invite members */}
                    {(this.state.showInviteMember)? <InviteMember />: null}
                </div>
                </div>
            </div>
        )
    }
}

export default LCycle