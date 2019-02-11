import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Profile from "./components/profile/Profile";
import Search from './components/search/Search';
import './App.css';
import Organizations from './components/profile/Organizations';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Search} />
            <div className="container">
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/orgs" component={Organizations} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
