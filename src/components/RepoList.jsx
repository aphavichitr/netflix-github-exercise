import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Repo from './Repo.jsx';

const RepoList = (props) => {
  return (
    <div>
      <List>
        { props.repos.map(repo => (
          <ListItem key={repo.id}>
            <Repo repo={repo} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default RepoList
