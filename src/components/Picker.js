import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mtg from 'mtgsdk';
import TestData from './TestData';
import PickerListItem from './PickerListItem';

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }

    this.cardList = this.cardList.bind(this);
    this.updateInputVal = this.updateInputVal.bind(this);
    this.addCard = this.addCard.bind(this);
    this.getCard = this.getCard.bind(this);
  }

  getCard() {
    // Mtg.card.find(3)
    // .then(result => {
    //     console.log(result.card) // "Black Lotus"
    // });

    // Mtg.card.where({ name: 'Fatal Push' })
    // .then(cards => {
    //     console.log(cards) // "Squee, Goblin Nabob"
    // })
    // Mtg.card.where({ name: 'Zada' })
    // .then(cards => {
    //     console.log(cards) // "Squee, Goblin Nabob"
    // })
    // Mtg.card.where({ name: 'Call for Unity' })
    // .then(cards => {
    //     console.log(cards) // "Squee, Goblin Nabob"
    // })
    console.log(TestData);
    return TestData;

  }

  cardList() {
    let result = [];
      console.log(this.props)
      console.log(this.props.cardList)
    for (var key in this.props.cardList) {
      let card = this.props.cardList[key];
      console.log(this.props.cardList[card])
      result.push(
        <PickerListItem card={card} />
      );
    }
    return (
      <ul>
        {result}
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
    // this.props.addCard(this.state.inputVal);
    let results = this.getCard();
    this.props.addCard(results[0]);
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

Picker.PropTypes = {
  cardList: PropTypes.object.isRequired,
  addCard: PropTypes.func.isRequired
}

export default Picker;