import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Repo from './Repo.jsx';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center !important',
  },
})

const RepoList = (props) => {
  const classes = useStyles();

  return (
    <div>
      <List>
        { props.repos.map(repo => (
          <ListItem className={classes.root} key={repo.id}>
            <Repo repo={repo} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default RepoList
