import React, { Component } from 'react';
import './app.css';

class App extends Component {
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

          </section>
        </div>
      </div>
    );
  }
}

export default App;
