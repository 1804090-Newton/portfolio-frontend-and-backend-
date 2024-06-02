import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import newton from '../../assets/icon/NEWTon.jpg';
import useStyles from './aboutStyle';


const AboutPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage} id="about">
      <Container>
        <Typography variant="h3" className={classes.title}>
          About Me
        </Typography>

        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" paragraph className={classes.description}>
              My name is Newton, and I'm currently pursuing Computer Science and Engineering at Chittagong University of Engineering and Technology. I have a fervent interest in competitive programming, continually pushing my boundaries by tackling problems from diverse online judges.
            </Typography>
            <Typography variant="body2" paragraph className={classes.description}>
              One aspect I particularly enjoy is brainstorming problems. I love exploring different ideas and collaborating with others to find the best solutions. This skill is invaluable in both mathematics and computer science, fostering creativity and teamwork. Mathematics has been a source of fascination for me, and I delight in delving into its complexities. Lately, my enthusiasm for programming has soared as I recognize its profound capability for problem-solving and fostering creativity.
            </Typography>
            <Typography variant="body2" className={classes.description}>
              I see programming as a powerful tool for problem-solving and creativity. Whether it's optimizing algorithms or developing innovative projects, programming allows me to translate abstract ideas into tangible solutions. At Spring Rain Pvt Ltd., where I'm currently engaged in career development, I have the opportunity to apply my skills to real-world projects and contribute to innovative solutions.
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
