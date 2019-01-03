import React, {Component} from 'react'
import logo from '../image/LClogo.png'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { setAuthedUser, handleSetAuthedUser } from '../actions/authUser'

class LogIn extends Component {

    state = {
        username: "",
        password: '',
        rememberme: false,
        toHome: false
      };
    
      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };


    
      handleSubmit = e => {
        e.preventDefault();
        
        const { username, password } = this.state;
        const { dispatch } = this.props;

        dispatch(handleSetAuthedUser(username, password));
    
        // dispatch(setAuthedUser(username))


    
        this.setState(currentState => ({
          toHome: currentState.username ? true : false
        }));
      };

      isEmpty() {
        return this.state.username === "" && this.state.password === "";
      }

    render(){
        if (this.state.toHome === true) {
            return <Redirect to="/" />;
          }

        return(
            <div>
                <h3 className="title has-text-grey">Login</h3>
                <p className="subtitle has-text-grey">Please login to proceed.</p>
                <div className="box">
                    <figure className="avatar" >
                        <img src={logo} alt="logo"/>
                    </figure>
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <div className="control">
                                <input className="input" 
                                value={this.state.username} 
                                type="text" placeholder="Your username" 
                                autoFocus="" onChange={this.handleChange('username')}/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input" 
                                value={this.state.password} 
                                type="password" placeholder="Your Password" 
                                onChange={this.handleChange('password')}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox" value={this.state.rememberme} onChange={this.handleChange('rememberme')}/>
                                Remember me
                            </label>
                        </div>
                        <button type='submit' className="button is-block is-info is-fullwidth" disabled={this.isEmpty()}>Login</button>
                    </form>
                </div>
                <p className="has-text-grey">
                    <Link to="/signUp"><strong>Sign up</strong></Link> &nbsp;·&nbsp;
                    <Link to="/forgotPassword">Forgot Password</Link> &nbsp;·&nbsp;
                    Need Help?
                </p>   
            </div>
        )
    }
}

// this will create props and give access to dispatch methods
export default connect()(LogIn);