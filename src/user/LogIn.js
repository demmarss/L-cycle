import React, {Component} from 'react'
import logo from '../image/LClogo.png'
import { Link } from 'react-router-dom';

class LogIn extends Component {
    render(){
        return(
            <div>
                <h3 class="title has-text-grey">Login</h3>
                <p class="subtitle has-text-grey">Please login to proceed.</p>
                <div class="box">
                    <figure class="avatar">
                        <img src={logo}/>
                    </figure>
                    <form>
                        <div class="field">
                            <div class="control">
                                <input class="input" type="email" placeholder="Your Email" autofocus=""/>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <input class="input" type="password" placeholder="Your Password"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="checkbox">
                                <input type="checkbox"/>
                                Remember me
                            </label>
                        </div>
                        <button class="button is-block is-info is-fullwidth">Login</button>
                    </form>
                </div>
                <p class="has-text-grey">
                    <a><Link to="/signUp"><strong>Sign up</strong></Link></a> &nbsp;·&nbsp;
                    <a><Link to="/forgotPassword">Forgot Password</Link></a> &nbsp;·&nbsp;
                    <a href="../">Need Help?</a>
                </p>   
            </div>
        )
    }
}

export default LogIn