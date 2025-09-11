
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { analyzeContent } = require('./services/gemini');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ error: 'Content is required for analysis.' });
    }

    try {
        const result = await analyzeContent(content);
        res.json(result);
    } catch (error) {
        console.error('Error analyzing content:', error);
        res.status(500).json({ error: 'Failed to analyze content.' });
    }
});

app.get('/', (req, res) => {
    res.send('Social Media Analyzer Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});