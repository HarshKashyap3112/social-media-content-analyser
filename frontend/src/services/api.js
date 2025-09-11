import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({path:"E:\social-media-analyzer\frontend\src\services\.env"})
const API_BASE_URL = "http://localhost:5000/api" // Ensure this matches your backend port

export const analyzeContent = async (content) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/analyze`, { content });
        return response.data;
    } catch (error) {
        console.error('Error calling analysis API:', error);
        throw error;
    }
};