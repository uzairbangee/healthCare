import React, { Fragment, useState, useEffect } from 'react'
import "./hero.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TagButton from "../TagButton/TagButton";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    padding: '50px 0px',
    maxWidth: '100%',
    boxShadow: 'none',
    // marginTop: '450px',
    background: 'transparent',
    marginLeft: 'auto',
    marginBottom: '40px',
    // width: '100%',
  },
  block: {
    width: '70%',
    backgroundColor: 'transparent',
    // marginLeft: '200px',
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


const Hero = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width: 720px)');


    return (
        <Fragment>
            <div className="hero_banner">
                <Paper className={classes.paper} style={matches ? { marginTop: '150px'} : { marginTop: '450px'}}>

                    <div className={classes.block} style={matches ? { marginLeft: '30px'} : { marginLeft: '200px'}}>
                        <Grid container spacing={1} style={{ padding: '0px'}}>
                            <Grid item xs={12} sm container>
                                <Grid item xs>
                                    <TagButton color={"#F34B7F"} text={"The last news"} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={matches ? {display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'} : {display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                           
                                        <Typography variant="h3" gutterBottom style={matches ? {fontWeight: 'bold', color: 'white'} : {fontWeight: 'bold', color: 'white', width: '70%'}}>
                                        Health system Flags Vulnerability in Epic COVID-19 Vaccine Scheduler
                                        </Typography>
                                  
                                        <button className="round_button_angle" style={matches ? {marginLeft: '30px'} : {marginLeft: '0px'}}>Read More</button>
                        </Grid>
                    </div>
                </Paper>
            </div>
        </Fragment>
    )
}

export default Hero;