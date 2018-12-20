import React, {Component} from 'react'
import logo from '../image/LClogo.png'

class CreateAcct extends Component {
    render(){
        return(
            <div>
                <h3 className="title has-text-grey">Create Account </h3>
                <p className="subtitle has-text-grey">Please sigup to proceed.</p>
                <div className="box">
                    <figure className="avatar">
                        <img src={logo} alt="logo"/>
                    </figure>
                    <form>
                        <div className="field">
                            <div className="control">
                                <input className="input" type="email" placeholder="Your Username" autoFocus=""/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input" type="email" placeholder="Your Email" autoFocus=""/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input" type="password" placeholder="Your Password"/>
                            </div>
                        </div>
                        <button className="button is-block is-success is-fullwidth">Register</button>
                    </form>
                </div> 
            </div>
        )
    }
}

export default CreateAcct