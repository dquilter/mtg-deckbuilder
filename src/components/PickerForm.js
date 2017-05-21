import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mtg from 'mtgsdk';
import TestData from './TestData';

class PickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      searchResults: null,
      selectedCard: null
    }    

    this.isAddDisabled = this.isAddDisabled.bind(this);
    this.updateInputVal = this.updateInputVal.bind(this);
    this.addCard = this.addCard.bind(this);
    this.getCard = this.getCard.bind(this);
    this.testSearchReady = this.testSearchReady.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }

  isAddDisabled() {
    let val = this.state.selectedCard ? '' : 'disabled';
    return {
      'disabled': val
    };
  }

  updateInputVal(evt) {
    // Update selected card
    this.setState({
      selectedCard: null
    })

    // Set input val
    this.setState({
      inputVal: evt.target.value
    })

    // Test if user finished typing
    this.testSearchReady(evt.target.value);
  }

  searchTimeout = undefined;
  testSearchReady(value) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(function() {
      if(value.length > 0) {
        this.getCard(value);
      }
    }.bind(this), 800);
  }

  getCard(value) {
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
        console.log(cards);
        this.setState({
          searchResults: cards
        })
    })
  }

  searchResults() {
    let resultList = [];
    for (var key in this.state.searchResults) {
      let result = this.state.searchResults[key];
      let onClick = (evt) => this.selectCard(evt, result);
      resultList.push(<a href="#" key={key} onClick={onClick}>{result.name}</a>)
    }
    var open = resultList.length > 0 ? 'is-open' : '';
    return (
      <div className={`search-results ${open}`}>
        {resultList}
      </div>
    )
  }

  // Selects card from results list
  selectCard(evt, result) {
    evt.preventDefault();

    // Update state
    this.setState({
      inputVal: result.name,
      selectedCard: result,
      searchResults: null
    });
    console.log(this.state)
  }

  // Adds card to deck
  addCard() {
    this.props.addCard(this.state.selectedCard);
  }
  
  render() {
    let isAddDisabled = this.isAddDisabled();
    return (
      <div className="picker-form clearfix ">
        <input 
          type="text" 
          className="card-input" 
          value={this.state.inputVal}
          onChange={this.updateInputVal}
        />
        <button 
          onClick={this.addCard}
          {...isAddDisabled}
        >
          Add Card
        </button>
        {this.searchResults()}
      </div>      
    )
  }
}

PickerForm.PropTypes = {
  addCard: PropTypes.func.isRequired
}

export default PickerForm;