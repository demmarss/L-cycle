import React, {Component} from 'react'

class ResultList extends Component {
    render(){
        return(
            <div>
                <h1>V8 Create New Task Landing Page </h1>
                <div className="card">  
                    <header className="card-header">    
                        <h2 className="title is-4">Result 1</h2>  
                    </header>
                    <div className="card-content">    
                        <p>Some details here</p>
                    </div>
                </div>
                <br/>
                <div className="card">  
                    <header className="card-header">    
                        <h2 className="title is-4">Result 2</h2>  
                    </header>
                    <div className="card-content">    
                        <p>Some details here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultList