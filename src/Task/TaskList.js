import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class TaskList extends Component {
    render(){
        return (
            <div>
                <h1 className="title is-4">V3 Tasks List</h1>
                <Link to ='/task'>
                    <div className="card">  
                        <header className="card-header">    
                            <h2 className="title is-4">Task 1</h2>  
                        </header>
                        <div className="card-content">    
                            <p>Some details here</p>
                        </div>
                    </div>
                </Link>
                <br/>
                <div className="card">  
                    <header className="card-header">    
                        <h2 className="title is-4">Task 2</h2>  
                    </header>
                    <div className="card-content">    
                        <p>Some details here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList