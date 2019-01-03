import React, { Component } from 'react'
import {SpellingTaskModel} from './models'

export default class CreateSpellingTask extends Component {
    state = {
        word: '',
        words: [],
        lCycleTitle: ''
    }

    onhandleChange = (e)=>{
        this.setState({
            word: e.target.value
        })
    }

    onAddWord=(e)=>{

        this.setState({
            words: this.state.words.concat([this.state.word])
        })

        e.target.reset()
        
        e.preventDefault()
      }
    
    onFinishSetTask =()=>{
        let task = SpellingTaskModel();
            task.words = this.state.words;
            task.Author= 'This current author';
            task.lcycleId = 'Add this learning cycle';
 
        //Add the created task to database and change status

        this.props.Status('start', task)
        
      }

    render(){
        return (
            <div>
                <div>
                    {this.state.words.map(x=> <h1 key={x}>{x}</h1>)}
                </div>
                <form onSubmit={this.onAddWord}>
                    <input className='input is-primary' type='text' placeholder='enter word' onChange={this.onhandleChange}/>
                    <br/>
                    <br/>
                    <button className='button is-warning'type='submit' >Add word</button>
                </form>
                <br/>
                <button className='button is-success' onClick={this.onFinishSetTask}>Finish</button>
            </div>
        )
    }
}

