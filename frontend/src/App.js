import React, { Component } from 'react';
import Header from './layout/Header';
import HorseList from './horse/HorseList';
import HorseForm from './horse/HorseForm';
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
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/horses" component={HorseList} />
              <Route exact path="/horses/create" component={HorseForm} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
