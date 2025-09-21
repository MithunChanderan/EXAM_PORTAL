// server/server.js
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const assignmentRoutes = require("./routes/assignments");
app.use("/api/assignments", assignmentRoutes);

require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Allow us to accept JSON data in the body

// Define Routes
app.use('/api/auth', require('./routes/auth'));
// Add other routes for courses, exams etc. here

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));