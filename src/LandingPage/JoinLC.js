import React, {Component} from 'react'

class JoinLC extends Component {

    handleClick= () =>{
        this.props.toggle('toJoin', 'toCreat', 'toDisplayTask')
    }

    render (){
        return (
            <div>
                <a class="button is-primary" onClick={this.handleClick}>Join Cycle</a>
            </div>
        )
    }
}

export default JoinLC