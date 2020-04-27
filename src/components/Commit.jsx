import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    width: '80%',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
  },
});

const Repo = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <GitHubIcon />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.commit.sha}
        </Typography>
        <Typography className={classes.text} color="textSecondary" gutterBottom>
          <strong>Author:</strong> {props.commit.commit.author.name}
        </Typography>
        <Typography className={classes.text} color="textSecondary" gutterBottom>
          <strong>Message:</strong> {props.commit.commit.message}
        </Typography>
        <Typography className={classes.text} color="textSecondary" gutterBottom>
          <strong>Date:</strong> {moment(props.commit.commit.author.date).format('MM/DD/YYYY hh:mm:ss A')}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Repo;
