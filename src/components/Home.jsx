import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RepoList from './RepoList.jsx';
import '../App.css';

const useStyles = makeStyles({
  title: {
    color: '#000',
  },
  orgTextField: {
    width: '50%',
  },
  error: {
    color: '#fff',
    fontSize: '12px',
    marginTop: '20px',
  },
})

const Home = () => {
  const classes = useStyles()
  // state
  const [org, setOrg] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setOrg(event.target.value);
  }

  const enterPressed = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setError('')

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
        if (err.response.status === 404) {
          setError('GitHub organization does not exist, please enter another one.')
        }
        console.error(err);
        console.log(err.response)
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={classes.title}>Most popular projects by stars</h1>
        <form className="org-form">
          <TextField
            id="org-text"
            className={classes.orgTextField}
            label="Enter your GitHub organization"
            placeholder="netflix"
            value={org}
            fullWidth
            onChange={handleChange}
            onKeyDown={enterPressed} />
        </form>

        <span className={classes.error}>{error}</span>

        <RepoList repos={repos} />
      </header>
    </div>
  );
}

export default Home;
