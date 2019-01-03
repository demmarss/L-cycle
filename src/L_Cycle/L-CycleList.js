import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class TaskList extends Component {
    render(){

        const { authedUser, learningCycle, dispatch } = this.props

        return (
            <div>

                    {authedUser?   
                        learningCycle.map(x =>
                            <Link to='/subtraction' key={x._id}>
                                <div className="box">
                                    <h2 className="title is-4">{x.lgtitle}</h2>   
                                    <p> {x.task.length} tasks
                                        <br/>
                                        {x.members.length} members
                                        <br/>
                                        Code: {x.code}
                                    </p>
                                </div>
                            </Link>             
                    ): 
                    <p className="box has-background-primary has-text-warning">LogIn or SignUp to VIEW learning group </p>
                
                }
            </div>
        )
    }
}
function mapStateToProps({ authedUser, learningCycle}) {
    return {
      authedUser,
      learningCycle
    };
  }
  

export default connect(mapStateToProps)(TaskList)