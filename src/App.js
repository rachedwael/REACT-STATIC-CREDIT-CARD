import React, { Component } from 'react';
import image from './image/2.jpg';

import './App.css';
import UserCard from './components/UserCard';
import DateCard from './components/DateCard';
import CodeCard from './components/CodeCard';
import FormSaisie from './components/FormSaisie';
class App extends Component {
 

  render() {
    return (
      <div class="card-container">
            <div class="name-card"><h1> CREDIT CARD</h1></div>
            <img class="puce" src={require=image} />
            <CodeCard />
            <DateCard />
            <UserCard />
        </div>

    );
  }
}

export default App;
