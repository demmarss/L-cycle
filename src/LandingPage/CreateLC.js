import React, {Component} from 'react'


class CreateLCycle extends Component {

    handleClick= () =>{
        this.props.toggle('toCreat', 'toJoin', 'toDisplayTask')
    }
    render (){
        return (
            <div>
                <p className="button is-success" onClick={this.handleClick}>Create Cycle</p>
            </div>
        )
    }
}

export default CreateLCycle