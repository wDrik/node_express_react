import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Router>
          <div>
            <Route exact path="/" component={MainComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
