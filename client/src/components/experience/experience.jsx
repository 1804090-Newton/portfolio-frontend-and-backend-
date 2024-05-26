import React from 'react';
import { Container, Typography, Grid, Card, CardContent, styled } from '@mui/material';

const experiences = [
  {
    companyName: 'Company A',
    role: 'Software Engineer',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    description: 'Worked on various web development projects.',
    achievements: [
      'Led a project to improve performance by 20%',
      'Mentored junior developers',
    ],
  },
  {
    companyName: 'Company B',
    role: 'Senior Developer',
    startDate: '2021-02-01',
    endDate: 'Present',
    description: 'Leading a team of developers.',
    achievements: [
      'Implemented CI/CD pipeline',
      'Increased code coverage by 30%',
    ],
  },
];

const GradientCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ExperienceSection = () => {
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
                  {experience.startDate} -{' '}
                  {experience.endDate === 'Present'
                    ? 'Present'
                    : experience.endDate}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {experience.description}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Achievements:
                </Typography>
                <ul>
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
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
