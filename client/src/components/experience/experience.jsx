import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, styled } from '@mui/material';
import { getAllExperiences } from '../../services/experienceService';

const GradientCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getAllExperiences();
        setExperiences(data);
      } catch (error) {
        console.error('Failed to fetch experiences', error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <Container id="experience" maxWidth="md">
      <Typography variant="h2" gutterBottom align="center">
        Experience
      </Typography>
      <Grid container spacing={3}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} key={index}>
            <GradientCard elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  {experience.role} at {experience.companyName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {experience.startDate} - {experience.endDate === 'Present' ? 'Present' : experience.endDate}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {experience.description}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Achievements:
                </Typography>
                <ul>
                {experience.achievements}
                </ul>
              </CardContent>
            </GradientCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExperienceSection;
