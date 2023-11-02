import React, { Component } from 'react';

class MyComponent extends Component {
  myRef = null;

  setMyRef = element => {
    this.myRef = element;
  };

  componentDidMount() {
    // Access the DOM element using this.myRef
    this.myRef.style.backgroundColor = 'lightblue';
  }

  render() {
    return (
      <div>
        <h1>Using Callback Ref</h1>
        <div ref={this.setMyRef}>This is a DOM element with a ref.</div>
      </div>
    );
  }
}

export default MyComponent;
