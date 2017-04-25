import React, { Component } from 'react';
import Header from './layout/Header';
import HorseList from './horse/HorseList';
import Home from './home/Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/horses" component={HorseList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
