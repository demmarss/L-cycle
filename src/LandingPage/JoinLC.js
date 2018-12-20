import React, {Component} from 'react'

class JoinLC extends Component {

    handleClick= () =>{
        this.props.toggle('toJoin', 'toCreat', 'toDisplayTask')
    }

    render (){
        return (
            <div>
                <p className="button is-primary" onClick={this.handleClick}>Join Cycle</p>
            </div>
        )
    }
}

export default JoinLC