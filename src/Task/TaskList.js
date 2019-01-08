import React, {Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {handleDeleteTask} from '../actions/tasks'
import Task from './Task'


class TaskList extends Component {

    handleDelete = (taskId) =>{

        console.log('I trigger id', taskId)

        const { dispatch } = this.props

        dispatch(handleDeleteTask(taskId))
    }


    render(){
        const { authedUser, task } = this.props
        return (
            <div>
                {authedUser?
                    task.length ===0 ?  
                    <div className="notification is-warning">
                        <p>No learning task found </p>
                        <br></br>
                        <Link to={'/creatTaskLandingPg'}>
                            <button className='button'>Click to create task</button>
                        </Link>
                        
                    </div>:
                    task.map(task=> 
                        <Task handleDelete={this.handleDelete} task={task} key={task._id}/>            
                    ) :
                    <p className="box has-background-success has-text-warning">Please login or signup</p>}
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, task}){
    return {
        authedUser,
        task
    }
}

export default connect(mapStateToProps)(TaskList)