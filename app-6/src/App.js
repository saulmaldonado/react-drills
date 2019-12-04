import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from"./Todo"

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      list: []
    }

    this.addToList = this.addToList.bind(this)
  }

  handleUpdate(value){
    this.setState({userInput: value})
  }

  addToList(){
    this.setState({
      list :[...this.state.list, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    // let Todolist = this.state.list.map((value, index) =>{
    //   return <Todo key={index} task={value} />
    // }) 
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.userInput} onChange={event => this.handleUpdate(event.target.value)}/>
        <button onClick={this.addToList}>Add</button>
        {this.state.list.map((value, index) => {
          return <Todo key={index} task={value} />
        })}
      </div>
    );
  }
}

export default App;
