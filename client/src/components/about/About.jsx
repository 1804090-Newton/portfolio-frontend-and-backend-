import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import newton from '../../assets/icon/NEWTon.jpg';
import useStyles from './aboutStyle';
import { getAboutContent } from '../../services/aboutService';

const AboutPage = () => {
  const classes = useStyles();
  const [aboutContent, setAboutContent] = useState({
    description1: '',
    description2: '',
    description3: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAboutData = async () => {
      try {
        const response = await getAboutContent();
        console.log('Fetched data:', response);
        if (response && response.length > 0) {
          setAboutContent(response[0]); 
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about content:', error);
        setError('Error fetching about content.');
        setLoading(false);
      }
    };
    getAboutData();
  }, []);

  if (loading) {
    return (
      <div className={classes.aboutPage} id="about">
        <Container>
          <CircularProgress />
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.aboutPage} id="about">
        <Container>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Container>
      </div>
    );
  }

  return (
    <div className={classes.aboutPage} id="about">
      <Container>
        <Typography variant="h3" className={classes.title}>
          About Me
        </Typography>
        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" paragraph className={classes.description}>
              {aboutContent.description1}
            </Typography>
            <Typography variant="body2" paragraph className={classes.description}>
              {aboutContent.description2}
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {aboutContent.description3}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className={classes.picture} src={newton} alt="profile" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPage;
