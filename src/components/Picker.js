import React, { Component } from 'react';

class Picker extends Component {

  testData()  {
    return [
      "White Card",
      "Black Card",
      "Green Card",
      "Red Card",
      "Blue Bullshit",
    ]
  }

  render() {
    return (
      <div className="picker-container">
        <input type="text" className="card-input" />
        <ul>
          <li>Card Name</li>
          <li>Card Name</li>
          <li>Card Name</li>
          <li>Card Name</li>
        </ul>
      </div>
    )
  }
}

export default Picker;