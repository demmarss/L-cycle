import React, {Component} from 'react'
import './Navigation.css'


class Navigation extends Component{

    render(){

    return (
        <div className="container">
            <ul>
                <li>Home</li>
                <li>Progress</li>
                <li>My Tasks</li>
                <li className='float-right'>My L-Cycles</li>
            </ul>
        </div>
    )
}
}

export default Navigation