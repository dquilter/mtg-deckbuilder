import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PickerListItem extends Component {
  constructor(props) {
    super(props);
    
    this.mana = this.mana.bind(this);
    this.renderMana = this.renderMana.bind(this);
  }

  mana() {
    return (
      <div className="mana-cost">{this.renderMana(this.props.card.manaCost)}</div>  
    )
  }

  manaRef = {
    'W': 'white',
    'B': 'black',
    'R': 'red',
    'G': 'green',
    'U': 'blue'
  }

  renderMana(val) {
    let tempArray = val.split('}');
    let finalArray = [];
    tempArray.map(function(val) {
      if (val.length > 0) {
        let thisVal = val.replace('{', '');
        if (isNaN(parseInt(thisVal, 10))) {
          finalArray.push(<span key={thisVal} className={`mana-symbol mana-symbol-${this.manaRef[thisVal]}`}></span>)
        } else {
          finalArray.push(<span key={thisVal} className={`mana-symbol`}>{thisVal}</span>)
        }
      }
    }.bind(this));
    
    return finalArray;
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