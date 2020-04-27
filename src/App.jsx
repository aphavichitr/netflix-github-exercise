import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@material-ui/core';
// import { green } from '@material-ui/core/colors';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {
  // state
  const [org, setOrg] = useState('');
  const [repos, setRepos] = useState([]);

  const handleChange = (event) => {
    setOrg(event.target.value);
  }

  const enterPressed = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      try {
        if (org === '') {
          console.log('error');
        } else {
          const result = await axios.get(`https://api.github.com/orgs/${org}/repos`);

          if (result.status === 200) {
            // sort by starred
            const sortedRepos = result.data.sort((a, b) => {
              return b.stargazers_count - a.stargazers_count;
            })

            setRepos(sortedRepos);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="org-form">
          <TextField
            id="org-text"
            label="Enter your GitHub organization"
            placeholder="netflix"
            value={org}
            fullWidth
            onChange={handleChange}
            onKeyDown={enterPressed} />
        </form>

        <RepoList repos={repos} />
      </header>
    </div>
  );
}

export default App;
