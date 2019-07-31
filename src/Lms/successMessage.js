import React from 'react'

export default function SuccessMessage (){
    return(
        <div>
            <article class="message is-success">
                <div class="message-header">
                    <p>Search successful</p>
                </div>
                <div class="message-body">
                    Your search gave 3 results
                </div>
            </article>
        </div>
    )
}