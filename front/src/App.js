import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import ListCategoryComponent from './components/category/ListCategoryComponent';
import CreateCategoryComponent from './components/category/CreateCategoryComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Router>
          <div>
            <Route exact path="/" component={MainComponent}></Route>
            <Route exact path="/category" component={ListCategoryComponent}></Route>
            <Route path="/category/new" component={CreateCategoryComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
