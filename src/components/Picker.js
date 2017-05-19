import React, { Component } from 'react';

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }

    this.cardList = this.cardList.bind(this);
    this.testData = this.testData.bind(this);
    this.updateInputVal = this.updateInputVal.bind(this);
    this.addCard = this.addCard.bind(this);
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
          console.log(item)
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    )
  }

  updateInputVal(evt) {
    console.log(evt.target.value)
    this.setState({
      inputVal: evt.target.value
    })
  }

  addCard() {
    this.props.addCard(this.state.inputVal)
  }

  render() {
    return (
      <div className="picker-container">
        <div className="form-row clearfix ">
          <input 
            type="text" 
            className="card-input" 
            value={this.state.inputVal}
            onChange={this.updateInputVal}
          />
          <button onClick={this.addCard}>Add Card</button>
        </div>
        {this.cardList()}
      </div>
    )
  }
}

export default Picker;