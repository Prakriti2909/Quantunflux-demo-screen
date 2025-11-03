const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: String,
    rollNo: Number,
    className: String,
    attendanceSummary: {
      totalDays: Number,
      presentDays: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);

