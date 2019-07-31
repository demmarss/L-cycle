import React, {Component} from 'react'

export default class  SearchBar extends Component {

state = {
    code: ""
}

handleChange = (e)=>{
    
    this.setState({
        code: e.target.value
    })
        
}

handleSearch = () =>{

    console.log("Code here.....", this.state.code)

    console.log("Status here.....", this.props.Status)
    
    this.props.Search(this.state.code, this.props.Status)
}
render(){
    return(
        <form className="has-text-centered">
            <div className="field  has-addons">
                <div className="control">
                    <input className="input"
                    defaultValue={this.state.code}
                    placeholder={this.props.PlaceHolder}
                    onChange={this.handleChange}
                    />
                </div>
                <p className="button is-block is-warning" onClick={this.handleSearch}
                
                
                >Search Code </p>
            </div>
            
        </form>
)
}

    
}