import React, { Fragment } from "react"
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import BigArticle from "../components/BigArticle/BigArticle";
import NavMenu from "../components/NavMenu/NavMenu";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SmallArticle from "../components/SmallArticle/SmallArticle";
import SmallButtonedArticle from "../components/SmallButtonedArticle/SmallButtonedArticle";
import Typography from '@material-ui/core/Typography';
import TextArticle from "../components/TextArticle/TextArticle";
import FeaturedArticle from "../components/FeaturedArticle/FeaturedArticle";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BlackBox from "../components/BlackBox/BlackBox";
import MiddleImage from "../components/MiddleImage/MiddleImage";
import SmallBoxArticle from "../components/SmallBoxArticle/SmallBoxArticle";
import pat from "../images/pat.png";
import bed from "../images/bed.png";
import drug from "../images/drug.png";
import room from "../images/room.png";
import doc from "../images/doc.png";
import doc2 from "../images/doc2.png";
import glove from "../images/glove.png";
import doc3 from "../images/doc3.png";
import RalewayWoff2 from '../../static/fonts/font.woff2';

const raleway = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  newpaper2 : {
    // padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
    boxShadow: 'none',
    marginTop: '-80px'
  },
  newpaper : {
    // padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '90%',
    boxShadow: 'none',
  },
  newpaperImage : {
    // padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    boxShadow: 'none',
    marginTop: '40px',
    background: 'linear-gradient(256.1deg, rgba(34, 175, 255, 0.53) -9.24%, #2744AC 97.75%)',
    marginBottom: '40px',
  },
  newblackpaper: {
    margin: 'auto',
    maxWidth: '90%',
    boxShadow: 'none',
    backgroundColor: "#000000"
  },
  blackpaper : {
    paddingBottom: '150px',
    margin: 'auto',
    maxWidth: '100%',
    boxShadow: 'none',
    width: '100%',
    backgroundColor: "#000000"
    
  },
  secondpaper: {
    margin: 'auto',
    maxWidth: '90%',
    boxShadow: 'none',
  },
  bpaper : {
    boxShadow: 'none',
    backgroundColor: "black",
    color: "white"
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  },
}));
export default function Home() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 600px)');
  const matches_big = useMediaQuery('(max-width: 1700px)');
  console.log(matches);
  return (
    <Fragment>
      <div className="wrapper">
      <Header/>
        <Hero/>
        <div className="upper_area">
          <HeroBanner/>
          <NavMenu/>
        </div>
        <div className="article_area">
           <BigArticle/>
           <Paper className={classes.newpaper}>
             {
               matches ?
               <Grid container spacing={3}>
                <Grid item>
                    <SmallArticle/>
                </Grid>
                <Grid item>
                  <SmallArticle/>
                </Grid>
                <Grid item>
                    <SmallArticle/>
                </Grid>
              </Grid>
             :
              <Grid container spacing={3}>
                <Grid item xs={4}>
                    <SmallArticle/>
                </Grid>
                <Grid item xs={4}>
                  <SmallArticle/>
                </Grid>
                <Grid item xs={4}>
                    <SmallArticle/>
                </Grid>
            </Grid>
             }
          </Paper>
          <Paper className={classes.secondpaper}>
            {
              matches_big ?
              <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>

                    <>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <FeaturedArticle/>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <FeaturedArticle/>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <FeaturedArticle/>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <FeaturedArticle/>
                        </Paper>
                      </Grid>
                    </Grid>
                    </>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <Typography variant="h4" gutterBottom style={{color: 'black', marginTop: '50px'}}>
                          The latest news
                        </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <TextArticle/>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <TextArticle/>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <TextArticle/>
                        </Paper>
                      </Grid>
                    </Grid>
                </Paper>
                </Grid>
              </Grid>
              :
              <Grid container spacing={2}>
              <Grid item xs={8}>
                <Paper className={classes.paper}>

                    <>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Paper className={classes.paper}>
                          <SmallButtonedArticle color={'#F34B7F'}/>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper className={classes.paper}>
                          <SmallButtonedArticle color={'#F34B7F'}/>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Paper className={classes.paper}>
                          <SmallButtonedArticle color={'#22AF2B'}/>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper className={classes.paper}>
                          <SmallButtonedArticle color={'#F34B7F'}/>
                        </Paper>
                      </Grid>
                    </Grid>
                    </>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <Typography variant="h4" gutterBottom style={{color: 'black', marginTop: '50px'}}>
                          The latest news
                        </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <TextArticle/>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <TextArticle/>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <TextArticle/>
                        </Paper>
                      </Grid>
                    </Grid>
                </Paper>
                </Grid>
              </Grid>
            }
          </Paper>

          <Paper className={classes.newpaper}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" gutterBottom style={{color: 'black', marginTop: '50px', fontWeight: 'bold'}}>
                    Featured
                  </Typography>               
                </Paper>
              </Grid>
            </Grid>
            {
              matches ?
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <FeaturedArticle/>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <FeaturedArticle/>
                  </Paper>
                </Grid>
              </Grid>
              :
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <FeaturedArticle/>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <FeaturedArticle/>
                  </Paper>
                </Grid>
              </Grid>
            }

            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <button className="watch_all">Watch all the news</button>            
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.blackpaper}>
            <Paper className={classes.newblackpaper}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Paper className={classes.bpaper}>
                      <Typography variant="h4" gutterBottom style={{marginTop: '50px', fontWeight: 'bold', color: 'white'}}>
                        Featured
                      </Typography>               
                    </Paper>
                  </Grid>
                </Grid>
              {
                matches ?
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Paper className={classes.bpaper}>
                      <BlackBox src={bed}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.bpaper}>
                      <BlackBox src={pat}/>
                    </Paper>
                  </Grid>
                </Grid>
                :
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Paper className={classes.bpaper}>
                      <BlackBox src={bed}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.bpaper}>
                      <BlackBox src={pat}/>
                    </Paper>
                  </Grid>
                </Grid>
              }
              </Paper>
          </Paper>

          <Paper className={classes.newpaper2}>
              {
                matches ?
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={glove}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={drug}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={doc}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={doc3}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={doc2}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={room}/>
                    </Paper>
                  </Grid>
                </Grid>
                :
                <>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={glove}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={drug}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={room}/>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={doc}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={doc3}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallBoxArticle src={doc2}/>
                    </Paper>
                  </Grid>
                </Grid>
                </>
              }
          </Paper>

          <Paper className={classes.newpaperImage}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <MiddleImage/>            
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.newpaper}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" gutterBottom style={{marginTop: '50px', fontWeight: 'bold', color: 'black'}}>
                    Consectetur
                  </Typography>               
                </Paper>
              </Grid>
            </Grid>

              {
                matches_big ?
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FeaturedArticle/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FeaturedArticle/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FeaturedArticle/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FeaturedArticle/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FeaturedArticle/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FeaturedArticle/>
                    </Paper>
                  </Grid>
                </Grid>
                :
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallButtonedArticle color={'#F34B7F'}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallButtonedArticle color={'#4B70F3'}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallButtonedArticle color={'#22AF2B'}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallButtonedArticle color={'#F34B7F'}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallButtonedArticle color={'#4B70F3'}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <SmallButtonedArticle color={'#22AF2B'}/>
                    </Paper>
                  </Grid>
                </Grid>
              }
          </Paper>

          

        </div>
      </div>
    </Fragment>
  )
}
