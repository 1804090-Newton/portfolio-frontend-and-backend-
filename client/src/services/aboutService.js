import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

const getAboutData = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching about', error);
    throw error;
  }
};

export { getAboutData };
