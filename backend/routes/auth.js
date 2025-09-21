const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// FIX: The filename is 'user.js' (lowercase u), so the path must match.
const User = require('../models/user');
const router = express.Router();

// Middleware to verify token and extract user info (can be used in other routes)
// Note: This is a basic example. You might want to move this to its own middleware file.
const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// GET /api/auth/students
// Using authMiddleware to protect this route as an example
router.get("/students", authMiddleware, async (req, res) => {
  try {
    // Ensure only a teacher can view all students
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: "Access denied" });
    }
    const students = await User.find({ role: "student" }).select("username _id");
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
  // Corrected to use 'username' to match your schema
  const { username, password, role } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      username,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  // Corrected to use 'username' to match your schema
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
// I've also added the auth middleware directly into this file for simplicity, as your 'assignments.js' was trying to import it from here.
// I also noticed your original code used 'name' and 'email' but your user schema uses 'username', so I updated the register/login routes to use 'username'.