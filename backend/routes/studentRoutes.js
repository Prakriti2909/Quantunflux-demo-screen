const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// Route 1: Seed dummy data
router.get("/seed", async (req, res) => {
  try {
    const dummyStudents = [
  {
    name: "Aarav Patel",
    rollNo: 101,
    className: "10A",
    attendanceSummary: { totalDays: 20, presentDays: 18 },
  },
  {
    name: "Riya Sharma",
    rollNo: 102,
    className: "10A",
    attendanceSummary: { totalDays: 20, presentDays: 16 },
  },
];


    await Student.insertMany(dummyStudents, { ordered: false });
    res.json({ message: "✅ Dummy students inserted!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to insert dummy data" });
  }
});

// Route 2: Fetch all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route 3: Attendance Summary for Dashboard
router.get("/attendance-summary", async (req, res) => {
  try {
    const students = await Student.find();

    if (!students || students.length === 0) {
      return res.json({ success: true, data: [] });
    }

    const summary = students.map((student) => {
      const totalDays = student.attendanceSummary?.totalDays || 0;
      const presentDays = student.attendanceSummary?.presentDays || 0;
      const absentDays = Math.max(totalDays - presentDays, 0);
      const percentage = totalDays
        ? ((presentDays / totalDays) * 100).toFixed(2)
        : 0;

      return {
        studentName: student.name,
        totalDays,
        presentDays,
        absentDays,
        percentage,
      };
    });

    res.json({ success: true, data: summary });
  } catch (err) {
    console.error("Error fetching attendance summary:", err);
    res.status(500).json({ error: "Failed to fetch summary" });
  }
});

module.exports = router; 
