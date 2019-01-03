import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleCreateLgroup } from '../actions/learningCycle'

class CreateLCForm extends Component {

    state = {
        lgtitle: '',
        toHome: false
      };
    
      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };


    
      handleSubmit = e => {
          
        e.preventDefault();

        
        
        const { lgtitle } = this.state;
        const { dispatch } = this.props;
    
        dispatch(handleCreateLgroup(lgtitle));
    
        this.setState(currentState => ({
          toHome: currentState.username ? true : false
        }));

      };

    //   isEmpty() {
    //     return this.state.username === "" && this.state.password === "";
    //   }




    render (){
        if (this.state.toHome === true) {
            return <Redirect to="/" />;
          }
        
          const { authedUser } = this.props

        return (
            <div>
                {authedUser? <form onSubmit={this.handleSubmit}>
                    <article className="message is-success">
                        <div className="message-header">
                            <p>Create L-Cycle</p>
                        </div>
                        <div className="message-body">
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" onChange={this.handleChange('lgtitle')} placeholder="Enter L-cycle title"/>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button type='submit' className="button is-warning">
                                    Click to Create
                                    </button>
                                </p>
                            </div>  
                        </div>
                    </article>
                </form>
                :
                
                <p className="box has-background-grey-lighter has-text-danger">LogIn or SignUp to CREATE learning group </p>
                
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, learningCycle}) {
    return {
      authedUser
    };
  }

export default connect(mapStateToProps)(CreateLCForm)