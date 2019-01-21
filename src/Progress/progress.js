import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import ProgressChart from './progressChart'

class Progress extends Component {

    attempts = (userId, task) =>{
        let attempt = task.scoreHistory.filter(x => (x.userId === userId))
        return attempt
    }

    getxlabel = (scoreArray) => {
        let xlabel = []
        for (let i=0; i<scoreArray.length; i++){
            xlabel.push(i+1)
        }
        return xlabel
    } 

    
    render(){
        const {taskSingle, authedUser } = this.props

        const scoreArray = (userId, task) => this.attempts(userId, task).map(x => x.correctedArray.length*100/task.questions.length)

        const xlableArray = (userId, task) => this.getxlabel(scoreArray(userId, task))

        return (           
                <div key={taskSingle._id}>  

                        {scoreArray(authedUser._id, taskSingle).length > 0?
                        
                        <ProgressChart 
                            labelTopic= {taskSingle.topic}
                            scoreArray = {scoreArray(authedUser._id, taskSingle)} 
                            xlableArray = {xlableArray(authedUser._id, taskSingle)}
                            yAxisMax = {100}
                            />: null
                        }      
                </div>
        )
    }
}
function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(Progress)




                     