import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <TextField id="org-text" label="Enter your org" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
