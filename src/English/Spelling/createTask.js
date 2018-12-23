import React, { Component } from 'react'
import { SpellingTaskModel } from './models'

export default class CreateSpellingTask extends Component {
    state = {
        word: '',
        words: [],
        lCycleTitle: ''
    }

    onhandleChang = (e)=>{
        this.setState({
            word: e.target.value
        })
        
    }

    onAddWord(e){
        this.setState({
            words: this.state.words.concat([this.state.word])
        })

        e.target.reset()
        
        e.preventDefault()
      }
    
    onFinishSetTask(){
        let task = {};
            task.words = this.state.words,
            task.Author= 'This current author',
            task.lcycleId = 'Add this learning cycle'
 
        //Add the created task to database

        // Navigate back to taskList
      }

    render(){
        return (
            <div>

            </div>
        )
    }
}

