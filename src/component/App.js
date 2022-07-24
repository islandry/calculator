import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  //store state at the top level component

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }; 
  //state is passed into calculate function at this component
  //but buttonName will be passed at the bottom level component
  //so it is passed as props into next level component



  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
