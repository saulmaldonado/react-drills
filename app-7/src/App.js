import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from "./NewTask"
import List from "./List"

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasklist: []
    }
    this.addToTaskList = this.addToTaskList.bind(this)
  }

  addToTaskList(newTask){
    this.setState({tasklist: [...this.state.tasklist, newTask]})
  }


  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <NewTask addMethod={this.addToTaskList}/>
        <List taskList={this.state.tasklist} />
      </div>
    );
  }
}


export default App;
