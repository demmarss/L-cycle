import React, { Component } from 'react'

export default class TaskCreated extends Component {
render(){
    return (
        <div>
            <div className="notification is-success">
                <p>Your task has been created. </p>
                <p>Here are the information</p>
                <p>Task topic:</p>
                <p>Task group:</p>
                <p>Number of questions:</p>
                <p>Date created:</p>
            </div>
            <button className="button">Back to class </button>
        </div>
    )
}
}