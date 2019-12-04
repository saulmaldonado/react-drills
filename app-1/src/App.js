import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      userInput : ''
    }
  }

  updateHandler(value){
    this.setState({userInput: value})
  }



  render() {
    return (
      <div className="App">
        <input onChange={event => this.updateHandler(event.target.value)}/>
        <p>{this.state.userInput}</p>

      </div>
    );
  }
}

export default App;
