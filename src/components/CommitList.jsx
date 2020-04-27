import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import axios from 'axios';
import Commit from './Commit.jsx';

const useStyles = makeStyles({
  // list: {
  //   justifyContent: 'center',
  // },
})

const CommitList = (props) => {
  const classes = useStyles();
  const { org, name } = useParams();
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(`https://api.github.com/repos/${org}/${name}/commits`);

        if (result.status === 200) {
          setCommits(result.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  })

  return (
    <div>
      <List>
        { commits.map((commit, index) => (
          <ListItem className={classes.list} key={index}>
            <Commit commit={commit} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CommitList;
