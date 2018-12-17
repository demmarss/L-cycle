import React, {Component} from 'react'
import './Navigation.css'

class Navigation extends Component{

    render(){

    return (
        <div className="container">
            <nav class="navbar is-success" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
                        </a>

                        <a class="navbar-item">
                            Progress
                        </a>

                        <a class="navbar-item">
                            My Tasks
                        </a>

                        <a class="navbar-item">
                            My L-Cycle
                        </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-warning">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-dark">
                            Log in
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}
}

export default Navigation 

