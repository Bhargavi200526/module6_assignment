import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Check registered users first
  const user = users.find(
    (u: any) => u.email === email && u.password === password
  );

  if (user) {
    const fakeToken = btoa(
      JSON.stringify({ role: user.role, name: email.split("@")[0] })
    );
    localStorage.setItem("token", fakeToken);
    return navigate({ to: "/dashboard" });
  }

  // Check fallback hardcoded users
  if (email === "student@example.com") {
    const token = btoa(JSON.stringify({ role: "student", name: "Student" }));
    localStorage.setItem("token", token);
    return navigate({ to: "/dashboard" });
  }

  if (email === "instructor@example.com") {
    const token = btoa(JSON.stringify({ role: "instructor", name: "Instructor" }));
    localStorage.setItem("token", token);
    return navigate({ to: "/dashboard" });
  }

  if (email === "admin@example.com") {
    const token = btoa(JSON.stringify({ role: "admin", name: "Admin" }));
    localStorage.setItem("token", token);
    return navigate({ to: "/dashboard" });
  }

  setError("Invalid credentials. Try again or register first.");
}

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-tr from-indigo-900 via-gray-900 to-gray-800 p-10 rounded-3xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Login</h2>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 transition"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type={show ? "text" : "password"}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 transition"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-400 hover:text-indigo-400"
            onClick={() => setShow(s => !s)}
            tabIndex={-1}
          >
            {show ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>
        </div>
        {error && <div className="mb-4 text-red-400 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Login
        </button>
        <div className="mt-6 text-gray-400 text-sm text-center">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-indigo-400 hover:underline transition"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
}
