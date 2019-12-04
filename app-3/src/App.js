import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }

  updateHandler(value){
    this.setState({userInput: value})
  }


  render() {
    let filteredFoods = this.state.foods.filter(value => {
      return value.includes(this.state.userInput)
    })

    return (
      <div className="App">
        <input onChange={event => this.updateHandler(event.target.value)}/>
        {filteredFoods.map((value, index) => {
        return <h2 key={index}>{value}</h2>
        })}
      </div>
    );
  }
}

export default App;
