// @ts-nocheck
import React, { useState, Component } from "react";
class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: "1982",
    };
  }

  changColor = () => {
    this.setState({ color: "blue", model: "Tesla" });
  };

  componentDidMount() {
    console.log("componentDidMount");
    //   runs after first render = RECRIEVE DATA FROM BACKEND
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    //   runs after component unmount
  }

  componentDidUpdate() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          it is a {this.state.color} - {this.state.model}
        </p>
        <button onClick={this.changColor}>Change Color</button>
      </div>
    );
  }
}
