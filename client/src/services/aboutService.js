 import axios from "axios";
 const API_URL = "http://localhost:3000";

    export const getAboutContent = async () => {
        return axios.get(`${API_URL}/about`)
        .then(response => response.data.data)
        .catch(error => {
            throw error;
        });
    };
    

