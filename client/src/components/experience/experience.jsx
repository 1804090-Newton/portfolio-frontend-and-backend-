import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  CardContent,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Edit, Delete, Add, ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  getAllExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} from '../../services/experienceService';
import { GradientCard, HeaderContainer, AddButton } from './experienceStyle';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentExperience, setCurrentExperience] = useState({
    experienceId: '',
    role: '',
    companyName: '',
    startDate: '',
    endDate: '',
    description: '',
    achievements: '',
  });
  const userId = 'user123'; 

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getAllExperiences();
        console.log('Fetched experiences:', data);
        setExperiences(data);
      } catch (error) {
        console.error('Failed to fetch experiences', error);
      }
    };

    fetchExperiences();
  }, []);

  const handleDeleteExperience = async (experienceId) => {
    try {
      await deleteExperience(userId, experienceId);
      setExperiences(experiences.filter((experience) => experience.experienceId !== experienceId));
    } catch (error) {
      console.error('Failed to delete experience', error);
    }
  };

  const handleOpenDialog = (experience = null) => {
    if (experience) {
      setCurrentExperience(experience);
      setIsEditMode(true);
    } else {
      setCurrentExperience({
        experienceId: '',
        role: '',
        companyName: '',
        startDate: '',
        endDate: '',
        description: '',
        achievements: '',
      });
      setIsEditMode(false);
    }
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setCurrentExperience({
      experienceId: '',
      role: '',
      companyName: '',
      startDate: '',
      endDate: '',
      description: '',
      achievements: '',
    });
    setOpen(false);
  };

  const handleSaveExperience = async () => {
    try {
      if (isEditMode) {
        await updateExperience(userId, currentExperience.experienceId, currentExperience);

      } else {
        currentExperience.userId = userId;
        currentExperience.experienceId = Date.now().toString();
        await addExperience(currentExperience);
      }
      const updatedExperiences = await getAllExperiences();
      setExperiences(updatedExperiences);
      handleCloseDialog();
    } catch (error) {
      console.error('Failed to save experience', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience({ ...currentExperience, [name]: value });
  };

  const handleToggleExpand = (experienceId) => {
    setExpandedCard(expandedCard === experienceId ? null : experienceId);
  };

  return (
    <Container id="experience" maxWidth="md">
      <HeaderContainer>
        <Typography variant="h3" gutterBottom marginTop={5}> 
          EXPERIENCE
        </Typography>
        <AddButton
          color="primary"
          onClick={() => handleOpenDialog()}
        >
          <Add />
        </AddButton>
      </HeaderContainer>
      <Grid container spacing={2}>
        {experiences.map((experience, index) => (
          <Grid item key={experience.experienceId} xs={12} sm={6} md={4} lg={4}>

            <GradientCard elevation={3}>
              <CardContent gutterBottom align="center">
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  {experience.role} at {experience.companyName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {experience.startDate} - {experience.endDate === 'Present' ? 'Present' : experience.endDate}
                </Typography>
                <Collapse in={expandedCard === experience.experienceId}>
                  <Typography variant="body1" gutterBottom>
                    {experience.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Achievements:
                  </Typography>
                  <List dense>
                    {experience.achievements
                      ? experience.achievements.split(',').map((achievement, i) => (
                          <ListItem key={i}>
                            <ListItemText>
                              <Box textAlign="center">{achievement}</Box>
                            </ListItemText>
                          </ListItem>
                        ))
                      : null}
                  </List>
                </Collapse>
              </CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <IconButton onClick={() => handleOpenDialog(experience)} color="primary">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDeleteExperience(experience.experienceId)} color="secondary">
                  <Delete />
                </IconButton>
                <IconButton onClick={() => handleToggleExpand(experience.experienceId)} color="primary">
                  {expandedCard === experience.experienceId ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
            </GradientCard>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{isEditMode ? 'Edit Experience' : 'Add Experience'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Role"
            name="role"
            value={currentExperience.role}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Company Name"
            name="companyName"
            value={currentExperience.companyName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Start Date"
            name="startDate"
            value={currentExperience.startDate}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="End Date"
            name="endDate"
            value={currentExperience.endDate}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={currentExperience.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            label="Achievements (comma separated)"
            name="achievements"
            value={currentExperience.achievements}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveExperience} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ExperienceSection;
