import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import GlobalNav from './components/GlobalNav';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllArtists}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/artist/:id" component={Artist}/>
        </div>
      </Router>
    );
  }
}

export default App;
