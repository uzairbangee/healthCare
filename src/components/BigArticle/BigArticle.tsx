import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TagButton from "../TagButton/TagButton";
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import doctor from "../../images/doctor.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '85%',
    boxShadow: 'none',
    marginTop: '40px'
  },
  image: {
    width: "100%",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function BigArticle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={doctor} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                  <TagButton color={"#4B70F3"} text={"The last news"} />
                <Typography variant="h2" gutterBottom>
                COVID-19 vaccine scheduler
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Michigan-based Beaumont Health detected "unusual activity" on Saturday related to the online COVID-19 vaccine scheduling available through its Epic electronic health record system. According to a press release shared on the system's website, a user took advantage of a vulnerability in Epic's scheduling tool, allowing for 2,700 people
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography> */}
              </Grid>
              <Grid item>
                <Typography variant="button" display="block" gutterBottom style={{ cursor: 'pointer', display: "inline-block" }}>
                    By Kat Jercich
                </Typography>
                <Typography variant="caption" display="block" gutterBottom style={{ display: "inline-block", marginLeft: '20px' }}>
                    February 1, 2021
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}