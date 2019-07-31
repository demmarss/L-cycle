import React from 'react'
import SearchBar from '../searchBar';
import SuccessMessage from '../successMessage';
import FailureMessage from '../failureMessage';
import {apiUrlForImages} from '../../service/api'

export default function IdCard ({setStatus, searchUser, user}){

    


    return(
        <div>
            <br/>
                <h1 className="title">ID Card</h1>    
            <br/>
        
        <div className="columns">
            <div className="column is-4">
                <p className="button is-warning is-large" onClick={()=>setStatus("")}>Back</p>
                <br/>
                <br/>
                <SearchBar Search={searchUser} PlaceHolder = "Enter parent/student/staff code" Status="idCard"/>
                <br/>
                <br/>
                {user!==null? <SuccessMessage/>: null}
                {user==null? <FailureMessage/>: null}
                <br/>
                <br/>
                <p className="button is-danger" onClick={() => window.print()}>Print</p>
            
            </div>
            <div className="column is-4">
                <br/>
                {user!==null? <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={apiUrlForImages+"/uploadsLMS/"+user.pic} alt="Question"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src={apiUrlForImages+"/uploadsLMS/"+user.pic} alt="Question"/>
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-2">{user.firstname + " " + user.lastname}</p>
                            <p class="title is-3">{user.grade}</p>
                        </div>
                        </div>

                        {/* <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div> */}
                    </div>
                </div>: null}

            </div>

            <div className="column is-4">
                <br/>
                
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <div class="media-content">
                            <p class="title is-2">John Smith</p>
                            <p class="subtitle is-4">Class One</p>
                        </div>
                        <div class="media-right">
                            <figure class="image is-96x96">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        
                        </div>

                        {/* <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}