import React from 'react'
import SearchBar from '../searchBar';
import SuccessMessage from '../successMessage';
import FailureMessage from '../failureMessage';
import {apiUrlForImages} from '../../service/api'

export default function RegisterProfile ({setStatus, searchUser, user}){
    
    return(
        
        <div>
            <br/>
                <h1 className="title">Registered Profile</h1>    
            <br/>          
            
            <div className="columns">
                <div className="column is-4">
                    <p className="button is-warning is-large" onClick={()=>setStatus("")}>Back</p>
                    <br/>
                    <br/>
                    <SearchBar Search={searchUser} PlaceHolder = "Enter parent/student/staff code" Status="registerProfile"/>
                    <br/>
                    <br/>
                                
                </div>
                <div className="column is-7">
                    <br/>
                    {user==null? <FailureMessage/>:
                        <div>
                             <SuccessMessage/>
                             <article className="media">
                                <figure className="media-left">
                                    <p className="image is-128x128">
                                    <img src={apiUrlForImages+"/uploadsLMS/"+user.pic} alt="Question"/>
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="content">
                                    <p>
                                        <strong>{user.firstname + " " + user.lastname}</strong> 
                                        <br/>
                                        Role: <small>{user.role}</small> 
                                        <br/>
                                        Code: <small>{user.code}</small>
                    
                                        {user.role == 'student'? <p>Parent Code: <small>{user.parentCode}</small></p>: null}
                                        <br/>
                                        Some message here
                                    </p>
                                    </div>
                                    <nav className="level is-mobile">
                                    <div className="level-left">
                                        <p className="button level-item">
                                        Delete
                                        </p>
                                        <p className="button level-item">
                                        Edit
                                        </p>
                                        <p className="button level-item">
                                        Print Id-Card
                                        </p>
                                    </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    }
                </div>            
            </div>
        </div>
    )
}