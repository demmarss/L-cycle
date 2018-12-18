import React, {Component} from 'react'

class DisplayTaskLists extends Component {

    handleClick= () =>{
        this.props.toggle('toDisplayTask','toJoin', 'toCreat')
    }

    render (){
        return (
            <div>
                <a class="button is-danger" onClick={this.handleClick}>Create Tasks</a>
            </div>
        )
    }
}

export default DisplayTaskLists