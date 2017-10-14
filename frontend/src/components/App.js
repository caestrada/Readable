import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content" className="container">
          <Route exact path="/" component={HomePage} />
        </div>
      </div>
    );
  }
}

export default App;
