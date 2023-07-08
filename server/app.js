const express = require('express');
const app = express();
const port = 3000; // Make sure this port is different from Vite's port (default: 5000)

// MongoDB connection
const dbConnect = require('./config/dbConnection')

dbConnect();

// Importing Routes
const blogRoutes = require('./routes/blogRoutes')

// Use JSON and Cookies
app.use(express.json());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});

// API Routes
app.use('/blog', blogRoutes)
