import React, {Component} from 'react'

class DisplayTaskLists extends Component {

    handleClick= () =>{
        this.props.toggle('toDisplayTask','toJoin', 'toCreat')
    }

    render (){
        return (
            <div>
                <p className="button is-danger" onClick={this.handleClick}>Create Tasks</p>
            </div>
        )
    }
}

export default DisplayTaskLists