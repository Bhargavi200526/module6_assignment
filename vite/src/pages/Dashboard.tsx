// import React from "react";
// import { getUserRole } from "../utils/auth";
// import StudentDashboard from "./dashboards/StudentDashboard";
// import InstructorDashboard from "./dashboards/InstructorDashboard";
// import AdminDashboard from "./dashboards/AdminDashboard";

// export default function Dashboard() {
//   const role = getUserRole();

//   if (!role) {
//     window.location.href = "/login";
//     return null;
//   }

//   if (role === "student") return <StudentDashboard />;
//   if (role === "instructor") return <InstructorDashboard />;
//   if (role === "admin") return <AdminDashboard />;

//   // Fallback for unknown roles
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <h2>Unauthorized or Unknown Role</h2>
//     </div>
//   );
// }
import React from 'react';
import { getUserFromToken } from '../utils/auth';
import StudentDashboard from './dashboards/StudentDashboard';
import InstructorDashboard from './dashboards/InstructorDashboard';
import AdminDashboard from './dashboards/AdminDashboard';

export default function Dashboard() {
  const user = getUserFromToken();

  if (!user) return <p className="text-center text-white mt-10">Unauthorized. Please login.</p>;

  return (
    <>
      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'instructor' && <InstructorDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
    </>
  );
}
