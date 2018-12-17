import React, {Component} from 'react'

class Task extends Component {
    render(){
        return (
            <div>
                <div class="card">  
                    <header class="card-header">    
                        <h2 class="title is-4">Task 1</h2>  
                    </header>
                    <div class="card-content">    
                        <p>Some details here</p>
                    </div>
                </div>

                <div class="card">  
                    <header class="card-header">    
                        <h2 class="title is-4">Task 2</h2>  
                    </header>
                    <div class="card-content">    
                        <p>Some details here</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Task