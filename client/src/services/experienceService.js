import axios from 'axios';

const API_URL = 'http://localhost:3000';

const getAllExperiences = async () => {
  try {
    const response = await axios.get(`${API_URL}/experiences`);
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching experiences', error);
    throw error;
  }
};

const addExperience = async (experience) => {
  try {
    const response = await axios.post(`${API_URL}/experience`, experience);
    return response.data.data;
  } catch (error) {
    console.error('Error adding experience', error);
    throw error;
  }
};

const updateExperience = async (userId, experienceId, experience) => {
  try {
    const response = await axios.put(`${API_URL}/experience/${userId}/${experienceId}`, experience);
    return response.data.data;
  } catch (error) {
    console.error('Error updating experience', error);
    throw error;
  }
};

const deleteExperience = async (userId, experienceId) => {
  try {
    await axios.delete(`${API_URL}/experience/${userId}/${experienceId}`);
  } catch (error) {
    console.error('Error deleting experience', error);
    throw error;
  }
};

export { getAllExperiences, addExperience, updateExperience, deleteExperience };
