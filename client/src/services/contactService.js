import axios from 'axios';

const API_URL = 'http://localhost:3000/contact';

export const submitContactForm = async (formData) => {
   return axios.post(API_URL, formData)
    .then(response => response.data.data)
    .catch(error => {
        throw error;
    });
};
