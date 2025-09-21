const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");
const auth = require("../middleware/auth"); // your JWT middleware

// POST /api/assignments
router.post("/", auth, async (req, res) => {
  try {
    const { title, subject, desc, studentId } = req.body;
    const teacherId = req.user.id;

    const assignment = new Assignment({
      title,
      subject,
      desc,
      assignedTo: studentId,
      assignedBy: teacherId
    });

    await assignment.save();
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create assignment" });
  }
});

// GET /api/assignments/teacher
router.get("/teacher", auth, async (req, res) => {
  const teacherId = req.user.id;
  const assignments = await Assignment.find({ assignedBy: teacherId })
    .populate("assignedTo", "username email")
    .exec();
  res.json(assignments);
});

// GET /api/assignments/student
router.get("/student", auth, async (req, res) => {
  const studentId = req.user.id;
  const assignments = await Assignment.find({ assignedTo: studentId })
    .populate("assignedBy", "username email")
    .exec();
  res.json(assignments);
});

module.exports = router;
