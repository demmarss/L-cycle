import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import logo from './image/LClogo.png'

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
            <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a>
                        <Link to='/'>
                            <img src={logo}/>
                        </Link>
                    </a>
                    
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            <Link to="/">Home</Link>
                        </a>

                        <a class="navbar-item">
                            <Link to="/myResult">Progress</Link>
                        </a>

                        <a class="navbar-item">
                            <Link to="/myClass">My Class</Link>
                        </a>

                        <a class="navbar-item">
                            <Link to="/myTask">My Task</Link>
                        </a>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <a class="button is-primary">
                            <Link to="/signUp"><strong>Sign up</strong></Link>
                            </a>
                            <a class="button is-light">
                            <Link to="/logIn">Log in</Link>
                            </a>
                            {/* <a class="button is-primary">
                                <Link to="/myAccount"><strong>MyAccount</strong></Link>
                            </a>
                            <a class="button is-light">
                                Log out
                            </a> */}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
}

export default Navigation 

