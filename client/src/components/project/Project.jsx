import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { GitHub, Link as LinkIcon } from '@mui/icons-material';
import { getAllProjects } from '../../services/projectService';

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
    backgroundColor: '#87CEEB', 
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

const ProjectSection = () => {
  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

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
