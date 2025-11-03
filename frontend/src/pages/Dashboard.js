// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import CalendarWidget from "../components/CalendarWidget";
import AttendanceTable from "../components/AttendanceTable";
import { MoreVertical, Bell } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
const daysInMonth = new Date(year, month + 1, 0).getDate();
const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const absentDays = [2, 5, 9, 13, 18, 23];
const holidayDays = [7, 14, 26];

const Dashboard = () => {
  const [data, setData] = useState([]);

  const API = process.env.REACT_APP_API_URL || "https://quantunflux-backend.onrender.com";

  useEffect(() => {
    fetch(`${API}/api/attendance/yearly/Aarav%20Patel`)
      .then(res => res.json())
      .then(d => {
        const formatted = d.map(item => ({
          name: monthNames[item.month - 1],
          value: Math.round(item.percentage) // convert decimals to whole number
        }));
        setData(formatted);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="p-6 w-full flex gap-6">
      <div className="w-[360px]">
        <ProfileCard />
      </div>

      <div className="flex-1 flex flex-col gap-6">

        {/* ATTENDANCE SUMMARY */}
        <div className="border rounded-xl p-6 w-full h-[300px]">
          <h2 className="text-sm font-semibold mb-4">Attendance Summary</h2>

          <div className="w-full h-[210px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10 }}>
                <defs>
                  <linearGradient id="purpleGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity={1} />
                    <stop offset="100%" stopColor="#E9D5FF" stopOpacity={1} />
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" hide />
                <YAxis hide />

                <Bar
                  dataKey="value"
                  fill="url(#purpleGrad)"
                  radius={[6, 6, 0, 0]}
                  label={({ x, y, width, index }) => (
                    <text
                      x={x + width / 2}
                      y={y - 8}
                      textAnchor="middle"
                      fill="#6B7280"
                      fontSize={11}
                    >
                      {data[index]?.name}
                    </text>
                  )}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* bottom row % dynamic from API */}
          <div className="flex justify-between px-2 text-xs text-gray-500 mt-2">
            {data.map(d => (
              <span key={d.name}>{d.value}%</span>
            ))}
          </div>
        </div>
        {/* 3 INLINE STATS */}
<div className="flex gap-6">
  {[
    { title: "19/23 Completed", sub: "Lectures attended" },
    { title: "75 %", sub: "Attendance %" },
    { title: "12", sub: "Total Leaves" },
  ].map((item, idx) => (
    <div
      key={idx}
      className="flex-1 p-4 border rounded-xl flex items-center gap-4 relative shadow-sm"
    >
      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
        <Bell size={18} className="text-purple-600" />
      </div>

      <div>
        <p className="font-semibold text-sm">{item.title}</p>
        <p className="text-xs text-gray-500">{item.sub}</p>
      </div>

      {/* 3 dots options */}
      <div className="absolute top-3 right-3 cursor-pointer opacity-60 hover:opacity-100 transition">
        <MoreVertical size={18} />
      </div>
    </div>
  ))}
</div>

        <div className="flex gap-6 w-full">
  <div className="flex-1">
    <CalendarWidget monthDays={monthDays} absentDays={absentDays} holidayDays={holidayDays}/>
  </div>
  <div className="flex-1 overflow-x-auto">
  <div className="w-max">
    <AttendanceTable monthDays={monthDays} absentDays={absentDays} />
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;
