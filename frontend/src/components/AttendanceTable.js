import React from "react";

const AttendanceTable = ({ monthDays, absentDays, year=2025, month=9 }) => { // month 0 based
  // remove weekends
  const filtered = monthDays.filter(day => {
    const dow = new Date(year, month, day).getDay();
    return dow !== 0 && dow !== 6; // remove Sun + Sat
  });

  // split into 3 nearly even chunks
    const size = Math.ceil(filtered.length / 3);

    const left = filtered.slice(0, size);
    const mid = filtered.slice(size, size * 2);
    const right = filtered.slice(size * 2, filtered.length);

  const renderCol = (days) => (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b">
          <th className="py-1">Date</th>
          <th className="py-1">Status</th>
        </tr>
      </thead>
      <tbody>
        {days.map((day) => {
          const absent = absentDays.includes(day);
          return (
            <tr key={day} className={`${day % 2 === 0 ? "bg-purple-50" : ""}`}>
              <td className="py-2">{day}</td>
              <td className={`py-2 font-medium ${absent ? "text-orange-500" : "text-purple-600"}`}>
                {absent ? "Absent" : "Present"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div className="mr-3 bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-m font-semibold mb-4">Attendance Table</h2>

      <div className="grid grid-cols-3 gap-6">
        {renderCol(left)}
        {renderCol(mid)}
        {renderCol(right)}
        </div>

    </div>
  );
};

export default AttendanceTable;
