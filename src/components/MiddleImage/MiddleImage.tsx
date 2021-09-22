import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TagButton from "../TagButton/TagButton";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    padding: '50px 0px',
    maxWidth: '100%',
    boxShadow: 'none',
    marginTop: '40px',
    background: 'linear-gradient(256.1deg, rgba(34, 175, 255, 0.53) -9.24%, #2744AC 97.75%)',
    margin: 'auto',
    marginBottom: '40px',
    // width: '100%',
  },
  block: {
    width: '80%',
    backgroundColor: 'transparent',
    margin: 'auto'
  },
  image: {
    width: "100%",
  },
  vector : {
    width: '15px'
  },
  img: {
    width: '100%'
  },
}));

export default function MiddleImage() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 600px)');
  let padding = "";

  console.log(matches);
  console.log(padding);

  useEffect(() => {
    if(matches){
      padding = '0px';
    }
    else{
      padding = '0px 30px';
    }
  }, [])

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <div className={classes.block}>
                 <Grid container spacing={1} style={{ padding: padding}}>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <TagButton color={"#F34B7F"} text={"The last news"} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ padding: padding}}>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <Typography variant="h3" gutterBottom style={{fontWeight: 'bold', color: 'white'}}>
                            Health System Flags Vulnerability
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ padding: padding}}>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <button className="Click_action">Read More</button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    </div>
  );
}