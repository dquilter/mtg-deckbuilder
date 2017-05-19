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
    return (
      <ul>
        {this.props.cardList.map(function(item) {
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
        <div className="form-row clearfix ">
          <input type="text" className="card-input" />
          <button onClick={this.props.addCard}>Add Card</button>
        </div>
        {this.cardList()}
      </div>
    )
  }
}

export default Picker;