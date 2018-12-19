import React, {Component} from 'react'
import logo from '../image/LClogo.png'

class ForgotPassword extends Component {
    render(){
        return(
            <div>
                <h3 class="title has-text-grey">Need Password Help!</h3>
                <p class="subtitle has-text-grey">Tell us your email</p>
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
                        <button class="button is-block is-danger is-fullwidth">Retrieve Password</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForgotPassword