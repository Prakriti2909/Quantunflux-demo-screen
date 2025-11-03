import React from "react";
import { Bell } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      {/* header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-medium text-gray-800">Your Profile</h3>
        <div className="text-gray-400">⋮</div>
      </div>

      {/* avatar + text */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-32 h-32 flex items-center justify-center">

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(#7c3aed 75deg, #e5e7eb 0deg)"
        }}
      />

      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      
</div>

        <div className="text-center mt-4">
          <div className="font-semibold text-lg text-gray-800">Welcome Student</div>
          <div className="text-sm text-gray-400 mt-1">Class 5th B</div>
          <div className="text-sm text-gray-400">Roll No : 21</div>
        </div>
      </div>

      {/* small cards */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Bell size={18} className="text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-800">2/8 Completed</div>
              <div className="text-xs text-gray-400">Assignments</div>
            </div>
          </div>
          <div className="text-gray-300">⋮</div>
        </div>

        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Bell size={18} className="text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-800">Pending</div>
              <div className="text-xs text-gray-400">Fees</div>
            </div>
          </div>
          <div className="text-gray-300">⋮</div>
        </div>
      </div>

      {/* holidays */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-4">Holidays And Events</h4>

        <div className="text-sm text-gray-700 mb-4">
          <div className="mb-3">
            <div className="font-medium">Republic Day</div>
            <div className="text-xs text-gray-400">26/01/2025</div>
          </div>
          <div className="mb-3">
            <div className="font-medium">Shivjayanti</div>
            <div className="text-xs text-gray-400">19/02/2025</div>
          </div>
          <div className="mb-3">
            <div className="font-medium">Mahashivratri</div>
            <div className="text-xs text-gray-400">26/02/2025</div>
          </div>
          <div className="mb-3">
            <div className="font-medium">Dhulivandan</div>
            <div className="text-xs text-gray-400">14/03/2025</div>
          </div>
        </div>
      </div>

      <button className="w-full rounded-full py-2 bg-purple-100 text-purple-700 font-medium">
        See All
      </button>
    </div>
  );
}
