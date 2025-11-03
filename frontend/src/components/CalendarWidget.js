import React from "react";

const CalendarWidget = () => {
  const year = 2025;
  const month = 9; // october

  const absentDays = [2, 21, 22];
  const holidayDays = [14, 19, 26];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks = [];
  let current = 1 - firstDay;

  for (let w = 0; w < 6; w++) {
    let row = [];
    for (let d = 0; d < 7; d++) {
      if (current < 1 || current > daysInMonth) {
        row.push(null);
      } else {
        row.push(current);
      }
      current++;
    }
    weeks.push(row);
  }

  return (
    <div className="bg-white rounded-xl shadow-md border p-6 w-[400px]">

      <div className="text-center text-sm text-gray-500 font-large">
        October {year}
      </div>

      <div className="w-full h-[1px] bg-gray-300 mt-2 mb-3"></div>

      <div className="grid grid-cols-7 text-s font-semibold mb-2 text-black">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d)=>(<div key={d} className="text-center">{d}</div>))}
      </div>

      <div className="grid grid-cols-7 text-sm">

        {weeks.flat().map((day, idx) => {
          if (!day) return <div key={idx} className="text-center h-10"></div>;

          const isAbsent = absentDays.includes(day);
          const isHoliday = holidayDays.includes(day);

          return (
            <div
              key={idx}
              className={`text-center relative flex items-center justify-center h-10
              ${isAbsent ? "border border-black rounded-full w-9 h-9 mx-auto" : ""}`}
            >
              <span className="text-black">
                {day}
              </span>

              {isHoliday && (
                <div className="absolute bottom-1 left-0 right-0 mx-auto h-[2px] w-4 bg-black rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget;
