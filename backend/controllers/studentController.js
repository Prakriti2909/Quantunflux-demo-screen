// controllers/studentController.js
import Student from "../models/student.js";

export const getStudentByRoll = async (req, res) => {
  try {
    const rollNo = Number(req.params.rollNo);
    const student = await Student.findOne({ rollNo });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
