// This is the main entry point for our Node.js application
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Route handlers
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
