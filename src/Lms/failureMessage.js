import React from 'react'

export default function FailureMessage (){
    return(
        <div>
            <article class="message is-danger">
                <div class="message-header">
                    <p>Search unsuccessful</p>
                </div>
                <div class="message-body">
                    Your search gave 0 results
                    Kindly get the code again
                    Then perform the search again
                </div>
            </article>
        </div>
    )
}