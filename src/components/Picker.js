import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mtg from 'mtgsdk';
import TestData from './TestData';
import PickerListItem from './PickerListItem';
import PickerForm from './PickerForm';

class Picker extends Component {
  constructor(props) {
    super(props);

    this.cardList = this.cardList.bind(this);
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
        <PickerListItem key={card.id} card={card} />
      );
    }
    return (
      <ul>
        {result}
      </ul>
    )
  }

  render() {
    return (
      <div className="picker-container">
        <PickerForm 
          addCard={this.props.addCard}
        />
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