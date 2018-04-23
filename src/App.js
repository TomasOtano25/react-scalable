import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import AppBar from "./components/appBar/AppBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <AppBar />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
