import React, { Component } from 'react'
import {apiUrlForImages} from '../../service/api'

export default class ReadingMatchingText extends Component {
    state = {
        questionType: "",
        notification: false,
        questions: [],
        qFile: null,
        answerFile: null,
        timeRequired: 10,
        counter: 0,
        qUploaded: "file",
        aUploaded: "file"         
    }

    isEmpty() {
        return (this.state.qFile === null || this.state.answerFile=== null)
      }
    onFive(){
        return (this.state.counter < 4)
      }
    
      handleRadio = (e) =>{
        console.log(e.target.value)
    }
    
    handleSubmit = (e)=>{
        //To show notificaiton if lgroup is not changed
        if (this.state.qFile === null || this.state.answerFile=== null){
            return this.setState({
                notification: true
            })
        }

        let formData = new FormData();
            formData.append('questionImage', this.state.qFile);
            formData.append('answerImage', this.state.answerFile);
            formData.append('timeRequired', this.state.timeRequired);
            
        this.props.handleAddFiles(formData)


            // Way out, First send main info and creat a task, return the task ID
            // Use the taskID to search for the task
            // For every clich of Upload Image(s) , save the image, get the reference to storage location and other metadata, 
            // then save it to appropriate section of the Task (i.e edit the task)

        this.setState({
            qFile: null,
            answerFile: null,
            counter: this.state.counter + 1,
            aUploaded: "file",
            qUploaded: "file"
        })
                
        e.preventDefault()
    }

    handleFinish = (e) =>{

        this.props.handleSetQuestion()

        e.preventDefault()

    }

    handleChange = prop => event => {
        this.setState({ 
            [prop]: event.target.value,
         });
      };
    
    handleChangeFile = prop => event => {
        this.setState({ 
            [prop]: event.target.files[0],
            qUploaded: "file is-warning"
        });
      };

      handleChangeFile2 = prop => event => {
        this.setState({ 
            [prop]: event.target.files[0],
            aUploaded: "file is-warning"
        });
      };

    render (){

        let { task } = this.props
       
        return (

            <div>
                <h1 className="title">Reading Matching Text</h1>
                <form>  
                    <div className="notification is-danger" hidden={!this.state.notification}>
                        Please ensure to fill <strong>all fields</strong>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <div className={this.state.qUploaded} onChange={this.handleChangeFile('qFile')}>
                                <label className="file-label">
                                    <input className="file-input" type="file" name="questionImage"/>
                                    <span className="file-cta">
                                    <span className="file-label">
                                        Upload Question
                                    </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="column">
                        <div className="field">
                                <div className="control">
                                    <div className="select is-primary">
                                    <select onInput={this.handleChange('timeRequired')}>
                                        <option value={this.state.timeRequired}>10 seconds</option>
                                        <option value={25}>25 seconds</option>
                                        <option value={60}>1 minutes</option>
                                        <option value={120}>2 minutes</option>
                                        <option value={300}>5 minutes</option>
                                        <option value={600}>10 minutes</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <p className="button is-warning is-rounded" type="submit" onClick={this.handleSubmit} disabled={this.isEmpty()}>
                                Add More Question
                            </p>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <div className={this.state.aUploaded} onChange={this.handleChangeFile2('answerFile')}>
                                <label className="file-label">
                                    <input className="file-input" type="file" name="answerImage"/>
                                    <span className="file-cta">
                                    <span className="file-label">
                                        Upload Answer
                                    </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="column">

                        </div>
                        <div className="column">
                        <p className="button is-success is-rounded" type="submit"  onClick={this.handleFinish} disabled={this.onFive()}>
                                Click to finish
                            </p>
                        </div>
                    </div>
            </form>
            <hr/>
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Question Image</th>
                        <th>Answer Image</th>
                        <th>Time Required</th>
                    </tr>
                </thead>
                <tbody>
                    {task.length > 0?
                    task[0].questions.map( x => 
                                            <DisplaySetTask key={task[0].questions.indexOf(x)} question = {x} qNumber= {task[0].questions.indexOf(x) +1} />
                                            ): null}  
                </tbody>
            </table>

            
            </div>
        )
    }
    
}

class DisplaySetTask extends Component {
    
    render (){

        let { question, qNumber } = this.props
               
        return (
                <tr>
                    <th>{qNumber}</th>
                    <th>
                        <figure className="image is-128x128">
                            <img src={apiUrlForImages+"/uploads/"+question.questionImageName} alt=""/>
                        </figure> 
                    </th>
                    <th>
                        <figure class="image is-128x128">
                            <img src={apiUrlForImages+"/uploads/"+question.answerImageName} alt=""/>
                        </figure>
                    </th>
                    <th>{question.timeRequired}</th>
                </tr>
        )
    }
}