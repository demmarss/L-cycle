import React, {Component} from 'react'
import './Navigation.css'

class Navigation extends Component{

    handleClick = () =>{
        var burger = document.querySelector('.burger')
        var nav = document.querySelector('#'+burger.dataset.target);

        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active');
        
    }

    render(){

    return (
        <div className="container">
            <nav class="navbar is-black" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                        <h2>L-Cycle</h2>
                    </a>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item is-active">
                            Home
                        </a>

                        <a class="navbar-item">
                            Progress
                        </a>

                        <a class="navbar-item">
                            My Tasks
                        </a>

                        <a class="navbar-item">
                            My Class
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
}

export default Navigation 

