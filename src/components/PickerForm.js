import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }    

    this.updateInputVal = this.updateInputVal.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  updateInputVal(evt) {
    this.setState({
      inputVal: evt.target.value
    })
  }

  addCard() {
    this.props.addCard(this.state.inputVal);
    // let results = this.getCard();
    // this.props.addCard(results[0]);
  }

  
  render() {
    return (
      <div className="form-row clearfix ">
        <input 
          type="text" 
          className="card-input" 
          value={this.state.inputVal}
          onChange={this.updateInputVal}
        />
        <button onClick={this.addCard}>Add Card</button>
      </div>      
    )
  }
}

PickerForm.PropTypes = {

}

export default PickerForm;