import React, {Component} from 'react'


class TaskList extends Component {
    render(){
        return (
            <div>
                <h1 className="title is-4">V9  L-Cycle Lists</h1>
                <ul>
                    <li>
                        <div className="card">  
                            <header className="card-header">    
                                <h2 className="title is-4">L-Cycle 1</h2>  
                            </header>
                            <div className="card-content">    
                                <p>Some details here</p>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="card">  
                            <header className="card-header">    
                                <h2 className="title is-4">L-Cycle 2</h2>  
                            </header>
                            <div className="card-content">    
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