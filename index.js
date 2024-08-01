// This is the main entry point for our Node.js application
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route handlers
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
