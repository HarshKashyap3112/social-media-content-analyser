import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Ensure this matches your backend port

export const analyzeContent = async (content) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/analyze`, { content });
        return response.data;
    } catch (error) {
        console.error('Error calling analysis API:', error);
        throw error;
    }
};