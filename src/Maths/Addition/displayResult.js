import React, { Component } from 'react'
import { Link } from 'react-dom'

export default class DisplayResult extends Component {
     
    render (){
        const { task, correctArray } = this.props
        const Result = correctArray.length *100/task.questions.length
        return (

            <div>
                <h1 className='title'>Your result is: {parseInt(Result)} %</h1>
                
                <p className="button is-success">Try Again</p>
    
                <p className="button is-primary">Review</p>
    
            </div>
        )
    }
    
}
