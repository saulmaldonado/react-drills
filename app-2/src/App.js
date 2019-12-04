import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.array.map((value, i) => {
          return(
          <h2 key={i}>{value}</h2>
          )
        })
      }
      </div>
    );
  }
}

export default App;
