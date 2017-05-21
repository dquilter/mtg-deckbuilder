import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PickerListItem extends Component {
  constructor(props) {
    super(props);
    
    this.mana = this.mana.bind(this);
  }

  mana() {
    return (
      <span className="mana-cost">{this.props.card.manaCost}</span>  
    )
  }

  render() {
    return (
      <li>
        {this.props.card.name}
        {this.mana()}
      </li>
    )
  }
}

PickerListItem.PropTypes = {
  card: PropTypes.object.isRequired
}

export default PickerListItem;