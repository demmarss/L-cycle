import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Task extends Component {
    
    render(){
        const {task, handleDelete } = this.props

        return (           
                <div className="box">  
                    <div className='notification is-info'>
                    <button className="delete" onClick={()=>handleDelete(task._id)}/>
                        <h2 className="title is-4">{task.topic}</h2>  
                        <p>{task.questions.length} questions</p>
                        <p>{task.scoreHistory.length} attempts</p>

                        <Link to ={'/task/'+task._id} > Click to see detail</Link>
                        <hr/>
                        <Link className="button is-warning" to={"/"+task.topic+"question/"+task._id}>
                            Click to start
                        </Link>
                    </div>
                </div>
        )
    }
}

export default Task




                     