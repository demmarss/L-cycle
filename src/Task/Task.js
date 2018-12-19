import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Task extends Component {

    

    render(){
        return (
            <div>
                
                    <div class="card">  
                        <header class="card-header">    
                            <h2 class="title is-4"> V4 Task title</h2>  
                        </header>
                        <div class="card-content">    
                            <p>Some details here</p>
                            <p>Some details here</p>
                            <p>Some details here</p>
                        </div>
                        <a class="button is-warning">
                            <Link to="/question">Click to start</Link>
                        </a>
                    </div>                
            </div>
        )
    }
}

export default Task