import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Repo = (props) => {
  console.log(props.repo)

  return (
    <Card>
      <CardContent>
        {props.repo.name}
      </CardContent>
    </Card>
  );
}


export default Repo
