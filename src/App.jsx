import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import CommitList from './components/CommitList.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/org/:org/repo/:name/commits">
              <CommitList />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
