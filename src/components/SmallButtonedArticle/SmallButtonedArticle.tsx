import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TagButton from "../TagButton/TagButton";
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import vert from "../../images/vert.png";
import Vector from "../../images/Vector.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    boxShadow: 'none',
    marginTop: '40px'
  },
  image: {
    width: '100%'
  },
  vector : {
    width: '15px'
  },
  img: {
    width: '100%'
  },
}));

export default function SmallButtonedArticle({color}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm container>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm container>
                        <ButtonBase className={classes.image}>
                          <img className={classes.img} alt="complex" src={vert} />
                        </ButtonBase>
                    </Grid>
                </Grid>
          </Grid>
          <Grid item xs={8} sm container >

            <Grid item xs container direction="column" spacing={2} style={{ display: 'flex', justifyContent: 'space-between'}}>
              <Grid item style={{width: '100%'}}>
                  <TagButton color={color} text={"The last news"} />
                <Typography variant="h5" gutterBottom>
                  CMS pauses organ procurement, Part D e-prescribing rules
                </Typography>
              </Grid>
              <Grid item style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'}}>
                <Typography variant="caption" display="block" gutterBottom style={{ display: "inline-block" }}>
                    22.23, February 1, 2021
                </Typography>
                <Typography variant="caption" display="block" gutterBottom >
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