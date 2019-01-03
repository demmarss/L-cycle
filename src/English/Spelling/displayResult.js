import React from 'react'

function ResultDisplay(props){

    function handleTryAgain(){
        props.Status('start', props.questions, [])
    }

    function handleReview(){
        props.Status('review')
    }


    return (

        <div>
            <h1>Your result is: {props.Result}</h1>
            
            <p className="button is-success" onClick={handleTryAgain}>Try Again</p>

            <p className="button is-primary" onClick={handleReview}>Review</p>

        </div>
    )

}

export default ResultDisplay