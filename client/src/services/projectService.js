import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

const getAllProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching experiences', error);
    throw error;
  }
};

export { getAllProjects };
