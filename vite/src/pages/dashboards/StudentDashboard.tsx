import React from "react";
import { AcademicCapIcon, BookOpenIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const courses = [
  {
    name: "Maths Reasoning",
    progress: 75,
    daysLeft: 12,
    videos: 440,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Historical Places",
    progress: 64,
    daysLeft: 5,
    videos: 240,
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Science Wonders",
    progress: 82,
    daysLeft: 8,
    videos: 320,
    color: "from-green-400 to-blue-500",
  },
];

const todoList = [
  { task: "Aptitude Assignment", time: "8:00 AM - 9:00 AM" },
  { task: "Complete 12 History Sessions", time: "9:00 AM - 2:00 PM" },
  { task: "Science Project Submission", time: "3:00 PM - 4:00 PM" },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/5 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 flex flex-col gap-8 shadow-lg">
        <div className="flex items-center gap-3">
          <AcademicCapIcon className="w-8 h-8 text-indigo-400" />
          <span className="text-xl font-bold text-white">EduBot LMS</span>
        </div>
        <nav className="flex flex-col gap-4 text-white">
          <a href="#" className="font-semibold text-indigo-400">Dashboard</a>
          <a href="#" className="hover:text-indigo-400">Courses</a>
          <a href="#" className="hover:text-indigo-400">Assignments</a>
          <a href="#" className="hover:text-indigo-400">Profile</a>
        </nav>
        <div className="mt-auto">
          <button className="w-full py-2 bg-indigo-600 rounded-xl text-white font-semibold hover:bg-indigo-700 transition">Logout</button>
        </div>
      </aside>
      {/* Main Dashboard */}
      <main className="flex-1 flex flex-col gap-8">
        {/* Highlight Card */}
        <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Maths Reasoning</h2>
            <p className="text-white mb-4">Now free for a limited time. Subscribe soon!</p>
            <button className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition">Subscribe Now</button>
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <BookOpenIcon className="w-16 h-16 text-white opacity-70" />
            <span className="text-white font-bold mt-2">440+ Videos</span>
          </div>
        </section>
        {/* Continue Learning */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4">Continue Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.name} className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${course.color} relative`}>
                <h4 className="text-xl font-bold text-white mb-2">{course.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                  <span className="text-white">{course.progress}% complete</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-3 mb-4">
                  <div
                    className="bg-white h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-white text-sm">
                  <span>{course.daysLeft} days left</span>
                  <span>{course.videos}+ Videos</span>
                </div>
                <button className="mt-4 w-full py-2 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition">Continue</button>
              </div>
            ))}
          </div>
        </section>
        {/* To-Do List */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4">Today's To-Do List</h3>
          <ul className="space-y-3">
            {todoList.map((item) => (
              <li key={item.task} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 shadow">
                <span className="text-white font-medium">{item.task}</span>
                <span className="text-indigo-300">{item.time}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      {/* Right Sidebar (Weekly Activities, Profile, etc.) */}
      <aside className="w-full lg:w-1/5 flex flex-col gap-8">
        <div className="bg-gradient-to-b from-indigo-700 to-purple-700 rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/32.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white mb-3"
          />
          <h4 className="text-white font-bold text-lg">Gundabathina Bhargavi</h4>
          <p className="text-indigo-200 text-sm">Student</p>
        </div>
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 shadow-lg">
          <h5 className="text-white font-semibold mb-2">Weekly Activities</h5>
          <ul className="text-indigo-200 text-sm space-y-2">
            <li>Maths: 6h 40m</li>
            <li>History: 4h 20m</li>
            <li>Science: 5h 10m</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
