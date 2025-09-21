// server.js

// 1. All imports and requires go at the top
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const connectDB = require('./db');

// Import route files
const authRoutes = require('./routes/auth');
const assignmentRoutes = require('./routes/assignments');

// 2. Initialize the Express app
const app = express();

// 3. Connect to the database
connectDB();

// 4. Use middleware
// Note: Middleware must be set up *before* the routes
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Allow us to accept JSON data in the body

// 5. Define API routes
app.use('/api/auth', authRoutes);
app.use('/api/assignments', assignmentRoutes);

// A simple test route
app.get('/', (req, res) => res.send('API is running...'));

// 6. Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));