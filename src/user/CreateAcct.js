import React, {Component} from 'react'
import logo from '../image/LClogo.png'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleCreateUser } from '../actions/users'

class CreateAcct extends Component {
    state = {
        username: "",
        password: '',
        rememberme: false,
        toHome: false,
        role: "Student"
      };
    
      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };


    
      handleSubmit = e => {
          
        e.preventDefault();
        
        const { username, password, role } = this.state;
        const { dispatch } = this.props;
    
        dispatch(handleCreateUser(username, password, role));
    
        this.setState(currentState => ({
          toHome: currentState.username ? true : false
        }));

      };

      isEmpty() {
        return this.state.username === "" && this.state.password === "";
      }

    render(){
        if (this.state.toHome === true) {
            return <Redirect to="/logIn" />;
          }

        return(
            <div>
                <h3 className="title has-text-grey">Create Account </h3>
                <p className="subtitle has-text-grey">Please sigup to proceed.</p>
                <div className="box">
                    <figure className="avatar">
                        <img src={logo} alt="logo"/>
                    </figure>
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <div className="control">
                                <input className="input" 
                                type="text" placeholder="Your Username" 
                                onChange={this.handleChange('username')} autoFocus=""/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input" type="password" onChange={this.handleChange('password')} placeholder="Your Password"/>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Select Role</label>
                            </div>
                            <div className="field-body">
                                
                                <div className="field">
                                    <div className="control has-text-centered" onChange={this.handleChange('role')} value={this.state.role}>
                                        <label className="radio">
                                            <input type="radio" name='role' value="Teacher"/>
                                            Teacher/Parent
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name='role' value="Student" defaultChecked/>
                                            Student/Learner
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="button is-block is-success is-fullwidth">Register</button>
                    </form>
                </div> 
            </div>
        )
    }
}

export default connect()(CreateAcct)