const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], required: true }
});

module.exports = mongoose.model("user", userSchema);

const assignmentSchema = new mongoose.Schema({
  title: String,
  subject: String,
  desc: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // student
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // teacher
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Assignments", assignmentSchema);
