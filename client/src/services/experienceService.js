import axios from 'axios';

const API_URL = 'http://localhost:3000';

const getAllExperiences = async () => {
 return axios.get(`${API_URL}/experiences`)
    .then(response => response.data.data)
    .catch(error => {
      throw error;
    });
};

const addExperience = async (experience) => {
 return axios.post(`${API_URL}/experience`, experience)
    .then(response => response.data.data)
    .catch(error => {
      throw error;
    });
};

const updateExperience = async (userId, experienceId, experience) => {
  return axios.put(`${API_URL}/experience/${userId}/${experienceId}`, experience)
    .then(response => response.data.data)
    .catch(error => {
      throw error;
    });
};

const deleteExperience = async (userId, experienceId) => {
  return axios.delete(`${API_URL}/experience/${userId}/${experienceId}`)
    .then(response => response.data.data)
    .catch(error => {
      throw error;
    });
};

export { getAllExperiences, addExperience, updateExperience, deleteExperience };
