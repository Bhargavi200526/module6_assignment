import React from "react";
import { ChartBarIcon, ClipboardIcon, CalendarIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const classProgress = [
  { name: "Class A", progress: 82 },
  { name: "Class B", progress: 67 },
  { name: "Class C", progress: 73 },
  { name: "Class D", progress: 54 },
];

const activities = [
  { title: "Meeting with the VC", time: "Today, 10:00 AM" },
  { title: "Grading assignments", time: "Today, 12:00 PM" },
  { title: "Schedule session", time: "Tomorrow, 09:00 AM" },
  { title: "Send AI App class notes", time: "Tomorrow, 3:00 PM" },
];

const staffRoom = [
  { name: "Adonys Atonelo", role: "Maths", online: true },
  { name: "Badsha Parvin", role: "History", online: false },
  { name: "Emmanuel John", role: "Science", online: true },
];

export default function InstructorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col p-6">
        <div className="mb-8 flex items-center gap-3">
          <UserGroupIcon className="w-8 h-8 text-cyan-400" />
          <span className="font-bold text-xl">Advent School</span>
        </div>
        <nav className="flex flex-col gap-4 font-medium">
          <a href="#" className="text-cyan-400">Home</a>
          <a href="#">Students</a>
          <a href="#">Classes</a>
          <a href="#">Records</a>
          <a href="#">Statistics</a>
          <a href="#">Staff Room</a>
        </nav>
        <div className="mt-auto pt-8 border-t border-gray-700">
          <a href="#" className="block mb-2">Settings</a>
          <a href="#" className="block">Log Out</a>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-900 text-white">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Welcome G.Bhargavi</h1>
          <div className="flex items-center gap-4">
            <input
              className="rounded-xl px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              placeholder="Search..."
            />
            <span className="flex items-center gap-2">
              <span className="rounded-full w-3 h-3 bg-green-400"></span>
              <span className="font-medium">G.Bhargavi</span>
              <span className="text-xs text-gray-400">Instructor</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Student Statistic (Bar Chart Placeholder) */}
          <div className="bg-gray-800 rounded-xl p-6 shadow flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Student Statistic</span>
              <span className="text-xs text-gray-400">Sep 2022</span>
            </div>
            <div className="flex-1 flex items-end gap-2 h-40">
              {/* Dummy bars */}
              {[40, 70, 60, 100, 80, 90, 60].map((h, i) => (
                <div
                  key={i}
                  className="w-6 bg-cyan-400 rounded"
                  style={{ height: `${h}%` }}
                  title={`Value: ${h}`}
                ></div>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-400">Avg: 0</div>
          </div>
          {/* Class Progress */}
          <div className="bg-gray-800 rounded-xl p-6 shadow">
            <div className="font-semibold mb-4">Class Progress</div>
            <ul className="space-y-4">
              {classProgress.map((cls) => (
                <li key={cls.name} className="flex items-center justify-between">
                  <span>{cls.name}</span>
                  <div className="w-2/3 bg-gray-700 rounded-full h-3 mx-2">
                    <div
                      className="bg-cyan-400 h-3 rounded-full"
                      style={{ width: `${cls.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-cyan-300 font-bold">{cls.progress}%</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Upcoming Activities */}
          <div className="bg-gray-800 rounded-xl p-6 shadow">
            <div className="font-semibold mb-4 flex justify-between items-center">
              Upcoming Activities
              <a href="#" className="text-cyan-400 text-xs">See all</a>
            </div>
            <ul className="space-y-3">
              {activities.map((act, i) => (
                <li key={i} className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2">
                  <CalendarIcon className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="font-medium">{act.title}</div>
                    <div className="text-xs text-gray-400">{act.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* Attendance (Line Chart Placeholder) */}
          <div className="bg-gray-800 rounded-xl p-6 shadow">
            <div className="font-semibold mb-2">Attendance</div>
            <div className="h-32 flex items-end gap-2">
              {/* Dummy line chart */}
              {[30, 60, 40, 80, 50, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="w-4 bg-cyan-300 rounded-t"
                  style={{ height: `${h}%` }}
                  title={`Attendance: ${h}`}
                ></div>
              ))}
            </div>
          </div>
          {/* Staff Room */}
          <div className="bg-gray-800 rounded-xl p-6 shadow">
            <div className="font-semibold mb-2">Staff Room</div>
            <ul>
              {staffRoom.map((staff) => (
                <li key={staff.name} className="flex items-center gap-2 mb-2">
                  <span className={`w-3 h-3 rounded-full ${staff.online ? "bg-green-400" : "bg-gray-500"}`}></span>
                  <span>{staff.name}</span>
                  <span className="text-xs text-gray-400 ml-auto">{staff.role}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Documents */}
          <div className="bg-gray-800 rounded-xl p-6 shadow">
            <div className="font-semibold mb-2">Documents</div>
            <ul>
              <li className="flex items-center gap-2 mb-2">
                <ClipboardIcon className="w-5 h-5 text-cyan-300" />
                <span>Assignment Templates</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <ClipboardIcon className="w-5 h-5 text-cyan-300" />
                <span>Class Schedules</span>
              </li>
              <li className="flex items-center gap-2">
                <ClipboardIcon className="w-5 h-5 text-cyan-300" />
                <span>Exam Guidelines</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
