import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/Home';
import axios from 'axios';
import _ from 'lodash'

test('test Netflix most starred repo', async () => {
  const result = await axios.get(`https://api.github.com/orgs/Netflix/repos`);

  if (result) {
    expect(result.status).toEqual(200)

    // sort by starred
    const sortedRepos = result.data.sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })

    let mostStarred = sortedRepos[0];
    _.each(sortedRepos, repo => {
      if (repo.stargazers_count >= mostStarred.stargazers_count) {
        mostStarred = repo;
      }
    })

    expect(mostStarred.name).toEqual(sortedRepos[0].name);
  }
})
