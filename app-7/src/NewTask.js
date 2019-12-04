import React, { Component } from "react"

export default class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.addToList = this.addToList.bind(this)
    }

    handleChange(value){
        this.setState({input: value})
    }

    addToList(){
        this.props.addMethod(this.state.input)
        this.setState({input: ''})
    }

    render(){
        return(
        <div>
            <input value={this.state.input} onChange={event => this.handleChange(event.target.value)}/>
            <button onClick={this.addToList}>Add</button>
        </div>
        )
    }
}