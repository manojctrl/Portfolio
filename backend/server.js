const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Import routes and middleware
const projectRoutes = require('./routes/projectRoutes');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`📍 ${req.method} ${req.url}`);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.json({ 
        message: 'Portfolio Backend is running',
        version: '1.0.0'
    });
});

// API Routes
app.use('/api/projects', projectRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
        path: req.url
    });
});

// Global error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`✅ Server is running on port: ${port}`);
    console.log(`📌 Database configured from .env file`);
});
