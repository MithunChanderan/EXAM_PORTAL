const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  desc: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Assignments", assignmentSchema);
