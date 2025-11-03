const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentName: String,
  date: Date,
  status: String,
});

module.exports = mongoose.model('Attendance', attendanceSchema);
