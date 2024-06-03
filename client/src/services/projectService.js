import axios from 'axios';

const API_URL = 'http://localhost:3000';

const getAllProjects = async () => {
  return axios.get(`${API_URL}/projects`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

const getProjectById = async (userId, projectId) => {
  return axios.get(`${API_URL}/project/${userId}/${projectId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

const createProject = async (project) => {
  return axios.post(`${API_URL}/project`, project)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

const updateProject = async (userId, projectId, project) => {
  return axios.put(`${API_URL}/project/${userId}/${projectId}`, project)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

const deleteProject = async (userId, projectId) => {
  return axios.delete(`${API_URL}/project/${userId}/${projectId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
