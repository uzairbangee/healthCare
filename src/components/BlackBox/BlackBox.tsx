import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TagButton from "../TagButton/TagButton";
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Vector from "../../images/Vector.svg"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    boxShadow: 'none',
    marginTop: '40px',
    backgroundColor: "#000000"
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

export default function BlackBox({src}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
                <Grid container spacing={1} style={{ padding: '30px'}}>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="doctors" src={src} />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ padding: '0px 30px'}}>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <TagButton color={"#F34B7F"} text={"The last news"} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ padding: '0px 30px'}}>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <Typography variant="h5" gutterBottom style={{fontWeight: 'bold', color: 'white'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ padding: '0px 30px'}}>
                    <Grid item xs={12} sm container style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                        <Grid item style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '50%'}}>
                            <Typography variant="overline" display="block" gutterBottom style={{color: 'white'}}>
                                By Kat Jercich
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom style={{lineHeight: '2.66', color: 'white'}}>
                                February 1, 2021
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom style={{lineHeight: '2.66', color: 'white'}}>
                            <img className={classes.vector} alt="Vector" src={Vector} /> 2134
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>  
        </Paper>
    </div>
  );
}