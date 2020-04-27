import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import CommitList from './components/CommitList.jsx'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/repo/:id/commits">
          <CommitList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
