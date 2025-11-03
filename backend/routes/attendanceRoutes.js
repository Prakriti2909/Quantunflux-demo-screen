const express = require("express");
const router = express.Router();
const Attendance = require("../models/attendance");

// Seed One Year Attendance for Aarav Patel
router.get("/seed-aarav-year", async (req, res) => {
  try {
    const studentName = "Aarav Patel";
    const year = 2025;
    const presentRate = 0.85;

    // delete existing so no duplicate
    await Attendance.deleteMany({ studentName });

    let records = [];

    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const status = Math.random() < presentRate ? "Present" : "Absent";
        const date = new Date(year, month, day);
        records.push({ studentName, date, status });
      }
    }

    await Attendance.insertMany(records);
    res.json({ success: true, message: "✅ Aarav 2025 attendance seeded!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Yearly Attendance Summary by Month for 1 student
router.get("/yearly/:studentName", async (req, res) => {
  try {
    const { studentName } = req.params;

    const result = await Attendance.aggregate([
      { $match: { studentName } },
      {
        $project: {
          month: { $month: "$date" },
          present: { $cond: [{ $eq: ["$status", "Present"] }, 1, 0] }
        }
      },
      {
        $group: {
          _id: "$month",
          totalDays: { $sum: 1 },
          presentDays: { $sum: "$present" }
        }
      },
      {
  $project: {
    month: "$_id",
    percentage: {
      $round: [
        { $multiply: [{ $divide: ["$presentDays", "$totalDays"] }, 100] },
        0
      ]
    }
  }
}
,
      { $sort: { month: 1 } }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "server error" });
  }
});

// Get full attendance records for a specific student
router.get("/:studentName", async (req, res) => {
  try {
    const { studentName } = req.params;
    const records = await Attendance.find({ studentName }).sort({ date: 1 });

    res.json({
      success: true,
      data: records
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


module.exports = router;
