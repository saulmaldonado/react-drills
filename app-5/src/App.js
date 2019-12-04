import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imgurl={"https://cdn.vox-cdn.com/thumbor/CreqRaK81oL90EsYB9m4TKUiDkc=/0x0:700x467/1200x800/filters:focal(294x178:406x290)/cdn.vox-cdn.com/uploads/chorus_image/image/65810465/EKo3U_qXkAEK1Fz.0.jpeg"}/>
      </div>
    );
  }
}

export default App;
