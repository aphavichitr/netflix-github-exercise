import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  root: {
    width: '80%',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pos: {
    marginBottom: 12,
  },
});

const Repo = (props) => {
  const classes = useStyles();
  console.log(props.repo)
  return (
    <Card className={classes.root}>
      <CardContent>
        <GitHubIcon />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.repo.name}
        </Typography>
        <Typography className={classes.description} color="textSecondary" gutterBottom>
          {props.repo.description}
        </Typography>
        <Typography className={classes.text} color="textSecondary" gutterBottom>
          <StarIcon />
          <span>{props.repo.stargazers_count}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}


export default Repo
