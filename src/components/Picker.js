import React, { Component } from 'react';

class Picker extends Component {
  constructor(props) {
    super(props);

    this.cardList = this.cardList.bind(this);
    this.testData = this.testData.bind(this);
  }

  testData() {
    return [
      "White Card",
      "Black Card",
      "Green Card",
      "Red Card",
      "Blue Bullshit",
    ]
  }
  testDataEmpty() {
    return []
  }

  cardList() {
    console.log(this)
    return (
      <ul>
        {this.testData().map(function(item) {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="picker-container">
        <input type="text" className="card-input" />
        {this.cardList()}
      </div>
    )
  }
}

export default Picker;