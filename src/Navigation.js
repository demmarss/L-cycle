import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom';
import logo from './image/LClogo.png'
import { connect } from 'react-redux'
import { logoutUser } from './actions/authUser'

class Navigation extends Component{

    handleClick = () =>{
        var burger = document.querySelector('.burger')
        var nav = document.querySelector('#'+burger.dataset.target);

        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active');
        
    }

    render(){

        const { authedUser, dispatch } = this.props
        console.log (authedUser)
    return (
        <div className="container">
            <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                
                    <Link to='/'>
                        <img src={logo} alt="logo"/>
                    </Link>
                    
                    <p role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </p>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>

                        <Link to="/myResult" className="navbar-item">
                            Progress
                        </Link>

                        <Link to="/myClass" className="navbar-item">
                            My Class
                        </Link>

                        <Link to="/myTask" className="navbar-item">
                            My Task
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                        {!authedUser?  
                            <Fragment>
                                <Link to="/signUp" className="button is-primary">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link to="/logIn" className="button is-light">
                                    Log in
                                </Link>
                            </Fragment>
                            :
                            <Fragment>
                                <p>Hello {authedUser}</p>
                                <Link to="/myAccount" className="button is-primary">
                                    <strong>MyAccount</strong>
                                </Link>
                                <Link to="/" className="button is-light" onClick={()=>dispatch(logoutUser(authedUser))}>
                                    Log out
                                </Link>
                            </Fragment> } 
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
}

function mapStateToProps({ authedUser}) {
    return {
      authedUser
    };
  }

export default connect(mapStateToProps)(Navigation)

