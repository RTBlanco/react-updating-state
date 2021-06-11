// Code ClickityClick Component Here
import React, { Component } from 'react';
import ButtonCounter from './ButtonCounter';
import LightSwitch from './LightSwitch';

class ClickityClick extends Component {
  constructor() {
    super();

    // define intial state: 
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
  }; 

  
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
        <ButtonCounter />
        <LightSwitch />
      </div>
    )
  }
}

export default ClickityClick;