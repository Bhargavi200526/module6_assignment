// import React, { useState } from "react";
// import { useNavigate } from "@tanstack/react-router";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     // For demo, just redirect to login
//     alert("Registration successful! You can now log in.");
//     navigate({ to: "/login" });
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gradient-to-tr from-indigo-900 via-gray-900 to-gray-800 p-10 rounded-3xl shadow-xl w-full max-w-md"
//       >
//         <h2 className="text-3xl font-bold text-white mb-8 text-center">Register</h2>
//         <div className="mb-6">
//           <label className="block text-gray-300 mb-2">Email</label>
//           <input
//             type="email"
//             className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 transition"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-300 mb-2">Password</label>
//           <input
//             type="password"
//             className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 transition"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-300 mb-2">Role</label>
//           <select
//             className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 transition"
//             value={role}
//             onChange={e => setRole(e.target.value)}
//           >
//             <option value="student">Student</option>
//             <option value="instructor">Instructor</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         {error && <div className="mb-4 text-red-400 text-sm">{error}</div>}
//         <button
//           type="submit"
//           className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
//         >
//           Register
//         </button>
//         <div className="mt-6 text-gray-400 text-sm text-center">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-indigo-400 hover:underline transition"
//           >
//             Login
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const alreadyExists = users.find((u: any) => u.email === email);
    if (alreadyExists) {
      setError("Email already registered.");
      return;
    }

    const newUser = { email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate({ to: "/login" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-tr from-indigo-900 via-gray-900 to-gray-800 p-10 rounded-3xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Register</h2>
        <input
          type="email"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
        {error && <div className="mb-4 text-red-400 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
