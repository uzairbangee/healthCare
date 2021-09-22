import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TagButton from "../TagButton/TagButton";
import Typography from '@material-ui/core/Typography';
import Vector from "../../images/Vector.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
    boxShadow: 'none',
    marginTop: '40px'
  },
  image: {
    width: "50%",
  },
  vector : {
    width: '15px'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function TextArticle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" style={{padding: '0px'}}>
              <Grid item xs>
                <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                COVID-19 vaccine scheduler
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" display="block" gutterBottom style={{ display: "inline-block" }}>
                    22.23, February 1, 2021
                </Typography>
                <Typography variant="caption" display="block" gutterBottom style={{lineHeight: '2.66'}}>
                <img className={classes.vector} alt="Vector" src={Vector} /> 2134
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}