import React, { Component } from 'react';
import Picker from './Picker';
import '../app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        'test'
      ]
    }
    this.addCard = this.addCard.bind(this);
  }

  addCard(value) {
    if (!this.state.cards.includes(value)) {
      this.setState({
        cards: [
          ...this.state.cards,
          value
        ]
      })
      console.log('Added card to parent state')
    } else {
      console.log('Items already exists');
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Deckbuilder</h1>
          <nav>
            <ul>
              <li>
                <a href="">Build</a>
              </li>
              <li>
                <a href="">Stats</a>
              </li>
              <li>
                <a href="">Random Hand</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="app-content">
          <section>
            <Picker 
              cardList={this.state.cards}
              addCard={this.addCard}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
