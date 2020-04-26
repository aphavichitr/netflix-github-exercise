import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@material-ui/core';
import RepoList from './components/RepoList.jsx';

const App = () => {
  // state
  const [org, setOrg] = useState('');

  const enterPressed = (event) => {
    event.preventDefault()

    if (event.key === 'Enter') {
      console.log(event)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <TextField id="org-text" label="Enter your org" placeholder="netflix" value={org} onChange={setOrg} onKeyDown={enterPressed} />
        </form>

        <RepoList org={org} />
      </header>
    </div>
  );
}

export default App;
