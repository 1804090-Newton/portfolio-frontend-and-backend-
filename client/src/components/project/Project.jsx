import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { GitHub, Link as LinkIcon, Edit, Delete, Add } from '@mui/icons-material';
import { getAllProjects, createProject, updateProject, deleteProject } from '../../services/projectService';
import useStyles from './projectStyle';

const ProjectSection = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const userId = 'user123'; 

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

  const handleAddClick = () => {
    setCurrentProject({ projectName: '', description: '', startDate: '', status: '', githubLink: '', demoLink: '', backgroundColor: '#87CEEB' });
    setIsEditing(false);
    setOpen(true);
  };

  const handleEditClick = (project) => {
    setCurrentProject(project);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDeleteClick = async (userId, projectId) => {
    try {
      await deleteProject(userId, projectId);
      setProjects(projects.filter(project => project.projectId !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProject(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  const handleSave = async () => {
    try {
      if (isEditing) {
        await updateProject(currentProject.userId, currentProject.projectId, currentProject);
        
      } else {
        currentProject.userId = userId;
        currentProject.projectId = Date.now().toString();
        await createProject(currentProject);
      }
      const updatedProjects = await getAllProjects();
        setProjects(updatedProjects);
      setOpen(false);
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.title}>
        PROJECTS
      </Typography>
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAddClick}>
          Add Project
        </Button>
      </div>
      <div className={classes.projectContainer}>
        {projects.map((project) => (
          <Card
            key={project.projectId}
            className={classes.card}
            style={{ backgroundColor: project.backgroundColor }} 
          >
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle} gutterBottom>
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
                <IconButton
                  aria-label="Edit"
                  className={classes.iconButton}
                  onClick={() => handleEditClick(project)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  className={classes.iconButton}
                  onClick={() => handleDeleteClick(project.userId, project.projectId)}
                >
                  <Delete />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Project' : 'Add Project'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="projectName"
            label="Project Name"
            type="text"
            fullWidth
            value={currentProject?.projectName || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={currentProject?.description || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="startDate"
            label="Start Date"
            type="date"
            fullWidth
            value={currentProject?.startDate || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="text"
            fullWidth
            value={currentProject?.status || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="githubLink"
            label="GitHub Link"
            type="url"
            fullWidth
            value={currentProject?.githubLink || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="demoLink"
            label="Demo Link"
            type="url"
            fullWidth
            value={currentProject?.demoLink || ''}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectSection;