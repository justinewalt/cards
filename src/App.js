import React, { Component } from 'react';
import BASE_URL from './url';
import CardsDeck from './CardsDeck';
import Card from './Card';
import CardForm from './CardForm';
import './App.css';

class App extends Component {
  state = { cards: [] }

componentDidMount() {
  fetch(BASE_URL) 
    .then( res => res.json() )
    .then( cards => this.setState({ cards }) )
    .catch( err => console.log(err) )
}

addCard() {
  //function goes here
}

  render() {
    let { cards } = this.state;
    return (
      <div className="App">
        < CardForm handleSubmit={this.addCard} />
        < CardsDeck cards={cards} show={this.show} />
      </div>
    );
  }
}

export default App;
