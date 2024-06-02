 import axios from "axios";
 const API_URL = "http://localhost:3000";

    export const getAboutContent = async () => {
        try {
            const response = await axios.get(`${API_URL}/about`);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    };
    

