import React, {Component} from 'react'

class ResultList extends Component {
    render(){
        return(
            <div>
                <h1>V8 Create New Task Landing Page </h1>
                <div class="card">  
                    <header class="card-header">    
                        <h2 class="title is-4">Result 1</h2>  
                    </header>
                    <div class="card-content">    
                        <p>Some details here</p>
                    </div>
                </div>
                <br/>
                <div class="card">  
                    <header class="card-header">    
                        <h2 class="title is-4">Result 2</h2>  
                    </header>
                    <div class="card-content">    
                        <p>Some details here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultList