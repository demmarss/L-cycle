import React, {Component} from 'react'
import Task from './Task'

class TaskList extends Component {
    render(){
        return (
            <div>
                <h1 class="title is-4">Tasks List</h1>
                <Task />
            </div>
        )
    }
}

export default TaskList