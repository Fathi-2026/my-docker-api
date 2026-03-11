const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Home Route
app.get('/', (req, res) => {
    res.json({ 
        message: "Welcome! Your API is running successfully.",
        status: "Online"
    });
});

// NEW Portfolio About Route
app.get('/about', (req, res) => {
    res.json({
        developer: "Fathi",
        stack: ["Node.js", "Docker", "GitHub Actions", "Railway"],
        description: "This API was fully automated using a CI/CD pipeline."
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});