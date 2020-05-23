import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor() {
  super();
  this.state = {color: "red"};
  }

  render() {
    return (
      <h2>I am a {this.state.color} Car! My prop is {this.props.prop}</h2>
    )
  }
}

export default Car;
