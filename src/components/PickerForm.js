import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mtg from 'mtgsdk';
import TestData from './TestData';

class PickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      searchResults: null
    }    

    this.updateInputVal = this.updateInputVal.bind(this);
    this.addCard = this.addCard.bind(this);
    this.getCard = this.getCard.bind(this);
    this.testSearchReady = this.testSearchReady.bind(this);
    this.selectCard = this.selectCard.bind(this);
  }

  updateInputVal(evt) {
    this.setState({
      inputVal: evt.target.value
    })

    this.testSearchReady(evt.target.value);
  }

  addCard() {
    this.props.addCard(this.state.inputVal);
    // let results = this.getCard();
    // this.props.addCard(results[0]);
  }

  searchTimeout = undefined;
  
  testSearchReady(value) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(function() {
      this.getCard(value);
    }.bind(this), 800);
  }

  getCard(value) {
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
    // console.log(TestData);
    // return TestData;
    Mtg.card.where({ name: value })
    .then(cards => {
        console.log(cards) // "Squee, Goblin Nabob"
        this.setState({
          searchResults: cards
        })
        console.log(this.state)
    })
  }

  searchResults() {
    let resultList = [];
    for (var key in this.state.searchResults) {
      let result = this.state.searchResults[key];
      resultList.push(<a href="#" key={key} onClick={this.selectCard}>{result.name}</a>)
    }
    var open = resultList.length > 0 ? 'is-open' : '';
    return (
      <div className={`search-results ${open}`}>
        {resultList}
      </div>
    )
  }

  selectCard() {

  }

  
  render() {
    return (
      <div className="picker-form clearfix ">
        <input 
          type="text" 
          className="card-input" 
          value={this.state.inputVal}
          onChange={this.updateInputVal}
        />
        <button onClick={this.addCard}>Add Card</button>
        {this.searchResults()}
      </div>      
    )
  }
}

PickerForm.PropTypes = {
  addCard: PropTypes.func.isRequired
}

export default PickerForm;