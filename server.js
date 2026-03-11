const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ 
        // Put the message on one single line
        message: "Welcome! Your API is running successfully.",
        status: "Online"
    });
});

// Added '0.0.0.0' so Railway can find your app
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
