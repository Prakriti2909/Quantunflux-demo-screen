// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/student.js";

dotenv.config();
const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/attendance_dev";

const sample = {
  name: "Welcome Student",
  rollNo: 21,
  className: "5th B",
  profilePic: "",
  assignmentsCompleted: 2,
  totalAssignments: 8,
  attendance: [
    { date: "2025-10-03", status: "Present" },
    { date: "2025-10-04", status: "Absent" },
    { date: "2025-10-05", status: "Present" },
    { date: "2025-10-06", status: "Present" }
  ],
  holidays: [
    { name: "Republic Day", date: "2025-01-26" }
  ]
};

const run = async () => {
  await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
  await Student.deleteMany({});
  await Student.create(sample);
  console.log("Seeded sample student");
  mongoose.disconnect();
};

run().catch(e => console.error(e));
