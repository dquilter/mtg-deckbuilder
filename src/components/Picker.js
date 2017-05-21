import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PickerListItem from './PickerListItem';
import PickerForm from './PickerForm';

class Picker extends Component {
  constructor(props) {
    super(props);

    this.cardList = this.cardList.bind(this);
  }

  cardList() {
    let result = [];
    for (var objKey in this.props.cardList) {
      let card = this.props.cardList[objKey];
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
        <div className="picker-table">
          {this.cardList()}
        </div>
      </div>
    )
  }
}

Picker.PropTypes = {
  cardList: PropTypes.object.isRequired,
  addCard: PropTypes.func.isRequired
}

export default Picker;