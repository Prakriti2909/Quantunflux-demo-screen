import { Home, CalendarCheck, FileText, Table2, BookOpen, Settings, LogOut } from "lucide-react";
import Logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen px-5 py-4 flex flex-col">

      
      {/* Logo */}
      <div className="flex items-center justify-center mb-12 mt-6">
        <img src={Logo} alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Overview */}
      <div className="text-gray-500 font-semibold text-sm mb-4">OVERVIEW</div>
      <nav className="flex flex-col gap-6 text-gray-900">
        <button className="flex items-center gap-3 text-base hover:font-semibold text-purple-600">
          <Home size={20}/> Dashboard
        </button>
        <button className="flex items-center gap-3 text-base hover:font-semibold">
          <CalendarCheck size={20}/> Attendance
        </button>
        <button className="flex items-center gap-3 text-base hover:font-semibold">
          <FileText size={20}/> Assignments
        </button>
        <button className="flex items-center gap-3 text-base hover:font-semibold">
          <Table2 size={20}/> Timetable
        </button>
        <button className="flex items-center gap-3 text-base hover:font-semibold">
          <BookOpen size={20}/> Marks
        </button>
      </nav>

      {/* Settings bottom */}
      <div className="mt-auto mb-8 flex flex-col gap-3">
        <div className="text-gray-500 font-semibold text-m mb-4 mt-4">SETTINGS</div>
        <button className="flex items-center gap-3 text-base hover:font-semibold mb-3">
          <Settings size={20}/> Settings
        </button>
        <button className="flex items-center gap-3 text-base hover:font-semibold text-red-500">
          <LogOut size={20}/> Logout
        </button>
      </div>
    </div>
  );
}
