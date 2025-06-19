import React from "react";
import { UserGroupIcon, VideoCameraIcon, CurrencyDollarIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const stats = [
  { label: "Total Students", value: "72,056", icon: <UserGroupIcon className="w-7 h-7 text-violet-500" />, change: "+12.05%" },
  { label: "Total Course", value: "12,056", icon: <BookOpenIcon className="w-7 h-7 text-violet-500" />, change: "-12.25%" },
  { label: "Total Video", value: "31,056", icon: <VideoCameraIcon className="w-7 h-7 text-violet-500" />, change: "+25.21%" },
  { label: "Total Earning", value: "₹8,05,056", icon: <CurrencyDollarIcon className="w-7 h-7 text-violet-500" />, change: "+25.21%" },
];

const transactions = [
  { name: "Blonde Drizzle", course: "Digital Marketing Fundamentals", price: "$445.00", method: "Mastercard", status: "Success" },
  { name: "Kuiper Split", course: "Intro to Python Programming", price: "$345.00", method: "Visa", status: "Cancel" },
  { name: "Diva Bliss", course: "Machine Learning & Applications", price: "$645.00", method: "Visa", status: "Success" },
  { name: "Kuiper Split", course: "Leveraging Data for Decision Making", price: "$645.00", method: "Visa", status: "Pending" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-bold text-2xl text-violet-600">UStudy</span>
        </div>
        <nav className="flex flex-col gap-4 font-semibold text-gray-700">
          <a href="#" className="text-violet-600">Dashboards</a>
          <a href="#">Teachers</a>
          <a href="#">Students</a>
          <a href="#">Course</a>
          <a href="#">Resource</a>
          <a href="#">Certificate</a>
          <a href="#">Transaction</a>
          <a href="#">App Pages</a>
        </nav>
        <div className="mt-auto pt-8 border-t border-gray-100">
          <a href="#" className="block mb-2 text-gray-500">Setting</a>
          <a href="#" className="block text-gray-500">Support</a>
        </div>
        <div className="mt-8 p-4 bg-violet-100 rounded-xl">
          <div className="font-semibold text-violet-700 mb-2">New Course</div>
          <p className="text-xs text-gray-600">Check out the new dashboard view. Pages now load faster.</p>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 bg-gradient-to-br from-violet-50 to-white">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, G.Bhargavi!</h1>
          <p className="text-gray-500">Track your manage and LMS platform performance</p>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
              <div className="bg-violet-100 p-3 rounded-full">{stat.icon}</div>
              <div>
                <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
                <div className="text-xs text-green-500">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Overview and Student Analysis */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2">Overview</div>
            {/* Dummy bar chart */}
            <div className="flex items-end gap-2 h-32">
              {[40, 60, 80, 70, 90, 60, 50].map((h, i) => (
                <div
                  key={i}
                  className="w-8 bg-violet-400 rounded"
                  style={{ height: `${h}%` }}
                  title={`Value: ${h}`}
                ></div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2">Student Analysis</div>
            {/* Dummy line chart */}
            <div className="flex items-end gap-2 h-32">
              {[30, 50, 40, 80, 60, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="w-8 bg-violet-200 rounded"
                  style={{ height: `${h}%` }}
                  title={`Value: ${h}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/* Transaction Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold mb-4">Transaction</div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-xs">
                <th className="py-2">Customer Name</th>
                <th>Course</th>
                <th>Price</th>
                <th>Payment Methods</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="py-2">{tx.name}</td>
                  <td>{tx.course}</td>
                  <td>{tx.price}</td>
                  <td>{tx.method}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${tx.status === "Success" ? "bg-green-100 text-green-700" :
                        tx.status === "Cancel" ? "bg-red-100 text-red-700" :
                        "bg-yellow-100 text-yellow-700"}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
