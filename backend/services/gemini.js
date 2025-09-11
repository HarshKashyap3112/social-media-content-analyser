const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeContent(content) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Analyze the following social media content and provide insights in JSON format.
    The insights should include:
    - "sentiment": "positive", "negative", "neutral", or "mixed"
    - "keywords": ["list", "of", "relevant", "keywords"]
    - "topics": ["list", "of", "main", "topics"]
    - "summary": "a brief summary of the content"
    - "actionable_insights": ["suggestions based on the analysis"]
    - "improvemnet in content:["list"]

    Content: "${content}"

    Example JSON structure:
    {
      "sentiment": "positive",
      "keywords": ["example", "keywords"],
      "topics": ["example", "topics"],
      "summary": "This is an example summary.",
      "actionable_insights": ["Improve engagement by...", "Target this audience..."]
    }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
        // Attempt to parse the text as JSON directly
        return JSON.parse(text);
    } catch (e) {
        console.error("Failed to parse Gemini API response as JSON:", text, e);
        // If parsing fails, try to extract JSON from markdown code block
        const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
        if (jsonMatch && jsonMatch[1]) {
            try {
                return JSON.parse(jsonMatch[1]);
            } catch (innerError) {
                console.error("Failed to parse JSON from markdown block:", jsonMatch[1], innerError);
                return { error: "Could not parse analysis results.", rawResponse: text };
            }
        }
        return { error: "Could not parse analysis results.", rawResponse: text };
    }
}

module.exports = { analyzeContent };