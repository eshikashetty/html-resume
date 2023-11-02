import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // Access the DOM element using this.myRef.current
    this.myRef.current.style.backgroundColor = 'lightblue';
  }

  render() {
    return (
      <div>
        <h1>Using React.createRef()</h1>
        <div ref={this.myRef}>This is a DOM element with a ref.</div>
      </div>
    );
  }
}

export default MyComponent;
