import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class LCycle extends Component {
    
    render(){
        const {lgroup, handleDelete } = this.props

        return (
            <div className="box">
                <div className="notification is-info">
                    <button className="delete" onClick={()=>handleDelete(lgroup._id)}/>
                        <h2 className="title is-4">{lgroup.lgtitle}</h2>   
                            <p> 
                                Code: {lgroup.code}
                            </p>
                    <Link to={"/lgroups/"+ lgroup._id}>
                        <p>Click here for detail</p>
                    </Link>  
                </div>
            </div>
        )
    }
}

export default LCycle