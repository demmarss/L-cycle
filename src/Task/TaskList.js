import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class TaskList extends Component {
    render(){
        const { authedUser, learningCycle, task,  dispatch } = this.props
        return (
            <div>
                <h1 className="title is-4">V3 Tasks List</h1>

                {authedUser?
                task.map(task=>   
                <Link to ='/task' key={task._id}>
                    <div className="card">  
                        <header className="card-header">    
                            <h2 className="title is-4">{task.topic}</h2>  
                        </header>
                        <div className="card-content">    
                            <p>{task.questions.length} questions</p>
                            <p>{task.scoreHistory.length} attempts</p>
                        </div>
                    </div> 
                    <br/>
                </Link> 
                ) :
                <p>Please login or signup</p>}

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