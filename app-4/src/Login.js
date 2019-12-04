import React, {Component} from 'react'

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    updateUsername(value){
        this.setState({username: value})
    }

    updatePassword(value){
        this.setState({password: value})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    } 
    render(){
        return(
        <div>
            <input onChange={event => this.updateUsername(event.target.value)}/>
            <input onChange={event => this.updatePassword(event.target.value)}/>
            <button onClick={this.handleLogin}>Login</button>
        </div>
        )
    }
}
