import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Task extends Component {

    

    render(){
        return (
            <div>
                
                    <div className="card">  
                        <header className="card-header">    
                            <h2 className="title is-4"> V4 Task title</h2>  
                        </header>
                        <div className="card-content">    
                            <p>Some details here</p>
                            <p>Some details here</p>
                            <p>Some details here</p>
                        </div>
                        <Link className="button is-warning" to="/question">
                            Click to start
                        </Link>
                        
                    </div>                
            </div>
        )
    }
}

export default Task