import React, {Component} from 'react'

class CreateLCycle extends Component {
    handleClick= () =>{
        this.props.toggle('toCreat', 'toJoin', 'toDisplayTask')
    }
    render (){
        return (
            <div>
                <a class="button is-success" onClick={this.handleClick}>Create Cycle</a>
            </div>
        )
    }
}

export default CreateLCycle