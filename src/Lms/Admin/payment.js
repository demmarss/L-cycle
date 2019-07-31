import React from 'react'
import SearchBar from '../searchBar';
import SuccessMessage from '../successMessage';
import FailureMessage from '../failureMessage';

export default function Payment ({setStatus, searchUser, user}){
    return(
        <div>            
            <br/>
                <h1 className="title">Payment</h1>    
            <br/>
            <div className="columns">
                <div className="column is-4">
                    <p className="button is-warning is-large" onClick={()=>setStatus("")}>Back</p>
                    <br/>
                    <br/>
                    <SearchBar Search={searchUser} PlaceHolder = "Enter parent/student/staff code" Status="registerProfile"/>
                    <br/>
                    <br/>
                    <SuccessMessage/>
                    <FailureMessage/>
                                
                </div>
                <div className="column is-7">
                    <br/>

                    <div class="tile is-ancestor">
                        <div class="tile is-12 is-parent">
                            <article class="tile is-child notification is-primary">
                                <p class="title">Name of parent</p>
                                <p class="subtitle">Click to see the full profile of registered person</p>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-ancestor">
                        <div class="tile is-8 is-parent">
                        <article class="tile is-child notification is-info">
                                <p class="subtitle">Kids information</p>
                                <p class="subtitle">Amount per kids</p>
                                <p class="subtitle">Total</p>
                            </article>
                        </div>
                        <div class="tile is-4 is-parent">
                        <article class="tile is-child notification is-link">
                                <p class="title">Status</p>
                                <p class="subtitle">Payment message</p>
                            </article>
                        </div>
                    </div>

                    <div className="tile is-ancestor">
                        <div className="tile is-parent">

                        </div>

                        <div className="tile is-parent">
                            <input className="input"
                            type="number"
                            placeholder="Enter the partial amount paid"
                            />
                        <p class="button is-warning">Click paid</p>
                        </div>
                        
                        <div className="tile is-parent">
                            <p class="button is-success">Click if fully paid</p>
                        </div>
                    </div>

                </div>            
            </div>
        </div>
    )
}