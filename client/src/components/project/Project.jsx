import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Link, IconButton } from '@mui/material';
import { GitHub, Link as LinkIcon } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    minWidth: 275,
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    animation: '$fadeIn 0.5s ease forwards',
    transition: 'transform 0.3s ease',
  },
  cardContent: {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  title: {
    fontSize: 20,
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  iconButton: {
    padding: '0',
  },
  '@keyframes fadeIn': {
    'from': { opacity: 0, transform: 'translateY(50px)' },
    'to': { opacity: 1, transform: 'translateY(0)' },
  },
});

const projects = [
  {
    projectId: '1',
    userId: '1',
    projectName: 'Project A',
    description: 'Description of Project A',
    startDate: '2022-01-01',
    status: 'Completed',
    githubLink: 'https://github.com/example/project-a',
    demoLink: 'https://example.com/demo-a',
    backgroundColor: '#FFB6C1',
  },
  {
    projectId: '2',
    userId: '1',
    projectName: 'Project B',
    description: 'Description of Project B',
    startDate: '2022-02-01',
    status: 'Ongoing',
    githubLink: 'https://github.com/example/project-b',
    demoLink: 'https://example.com/demo-b',
    backgroundColor: '#87CEEB',
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {projects.map((project) => (
        <Card
          key={project.projectId}
          className={classes.card}
          style={{ backgroundColor: project.backgroundColor }}
        >
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} gutterBottom>
              {project.projectName}
            </Typography>
            <Typography variant="body2" component="p">
              <strong>Description:</strong> {project.description}
            </Typography>
            <Typography variant="body2" component="p">
              <strong>Start Date:</strong> {project.startDate}
            </Typography>
            <Typography variant="body2" component="p">
              <strong>Status:</strong> {project.status}
            </Typography>
            <div className={classes.icons}>
              <IconButton
                aria-label="GitHub Link"
                className={classes.iconButton}
                href={project.githubLink}
                target="_blank"
              >
                <GitHub />
              </IconButton>
              <IconButton
                aria-label="Demo Link"
                className={classes.iconButton}
                href={project.demoLink}
                target="_blank"
              >
                <LinkIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectSection;
