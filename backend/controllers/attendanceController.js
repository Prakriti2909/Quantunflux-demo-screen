const Attendance = require('../models/attendance');

// Controller to fetch attendance summary
const getAttendanceSummary = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.status(200).json(records);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch attendance data' });
  }
};

const getYearlyAttendance = async (req, res) => {
  try {
    const studentName = req.params.name;

    const records = await Attendance.find({ studentName });

    const formatted = records.map(r => ({
      month: r.month,
      percent: Math.round(r.percent) // convert decimal -> whole %
    }));

    res.status(200).json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed fetching yearly attendance' });
  }
};

module.exports = { getAttendanceSummary, getYearlyAttendance };

