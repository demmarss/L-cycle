import React, {Component} from 'react'
import logo from '../image/LClogo.png'

class CreateAcct extends Component {
    render(){
        return(
            <div>
                <h3 class="title has-text-grey">Create Account </h3>
                <p class="subtitle has-text-grey">Please sigup to proceed.</p>
                <div class="box">
                    <figure class="avatar">
                        <img src={logo}/>
                    </figure>
                    <form>
                        <div class="field">
                            <div class="control">
                                <input class="input" type="email" placeholder="Your Username" autofocus=""/>
                            </div>
                        </div>

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
                        <button class="button is-block is-success is-fullwidth">Register</button>
                    </form>
                </div> 
            </div>
        )
    }
}

export default CreateAcct