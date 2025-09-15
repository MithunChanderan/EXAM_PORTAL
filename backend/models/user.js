const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], required: true }
});

module.exports = mongoose.model("User", userSchema);

const assignmentSchema = new mongoose.Schema({
  title: String,
  subject: String,
  desc: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // student
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // teacher
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Assignment", assignmentSchema);
