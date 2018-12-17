import React, {Component} from 'react'


class TaskList extends Component {
    render(){
        return (
            <div>
                <h1 class="title is-4">L-Cycle Lists</h1>
                <ul>
                    <li>
                        <div class="card">  
                            <header class="card-header">    
                                <h2 class="title is-4">L-Cycle 1</h2>  
                            </header>
                            <div class="card-content">    
                                <p>Some details here</p>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div class="card">  
                            <header class="card-header">    
                                <h2 class="title is-4">L-Cycle 2</h2>  
                            </header>
                            <div class="card-content">    
                                <p>Some details here</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TaskList