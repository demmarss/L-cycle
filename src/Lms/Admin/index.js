import React, {Component} from 'react'
import LandingTabs from './landingTab'
import IdCard from './idCard';
import ClassProfile from './classProfile';
import RegisterProfile from './profile';
import Payment from './payment'
import { handleGetLMSUsers } from '../../actions/users';
import { connect } from 'react-redux'

class Administration extends Component {
    state={
        status: "",
        user: null, 
        students: [],
        pgTitile: ""
    }

    componentDidMount(){
        const {dispatch}= this.props
        dispatch(handleGetLMSUsers())
    }
    
    setStatus = (status, pgTitile="" )=> {

        this.setState({
            status,
            pgTitile
        })

    }

    searchUser = code =>{
        const { user } = this.props
        let userkeyArray = Object.keys(user).filter(key => user[key].code == code)
        if (userkeyArray == []){
            this.setState({
                user: null
            })  
            return null
        }else{
            let userhere = user[userkeyArray[0]] 
            this.setState({
                user: userhere
            })     
        }
    }

    searchClass = grade =>{
        let studentsHere = []
        const { user } = this.props
        let userkeyArray = Object.keys(user).filter(key => user[key].grade == grade)
        userkeyArray.map(key => studentsHere.push(user[key]))
        this.setState({
            students: studentsHere
        })
    }


    render(){
        return(
            <div>
                <br/>
                {this.state.status === ""? <LandingTabs setStatus={this.setStatus} searchUser={this.searchUser} SearchClass={this.searchClass}/>: null}
                {this.state.status === "idCard"? <IdCard setStatus={this.setStatus} searchUser={this.searchUser} user={this.state.user}/>: null}
                {this.state.status === "classProfile"? <ClassProfile setStatus={this.setStatus} SearchClass={this.searchClass} students={this.state.students} searchUser={this.searchUser} Title ={this.state.pgTitile}/>: null}
                {this.state.status === "registerProfile"? <RegisterProfile setStatus={this.setStatus} searchUser={this.searchUser} user={this.state.user}/>: null}
                {this.state.status === "payment"? <Payment setStatus={this.setStatus} searchUser={this.searchUser}/>: null}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, user}) {
    return {
      authedUser,
      user
    };
  }
  export default connect(mapStateToProps)(Administration)