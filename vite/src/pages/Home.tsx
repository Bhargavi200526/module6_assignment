import React from "react";
import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden">

      {/* Animated light orbs */}
      <div className="absolute w-[150%] h-[150%] bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 opacity-20 rounded-full blur-[120px] animate-pulse -top-1/2 -left-1/2 z-0" />
      <div className="absolute w-[80%] h-[80%] bg-indigo-600 opacity-10 rounded-full blur-[100px] animate-spin-slow top-0 right-0 z-0" />

      {/* Particle Simulation with Tailwind utility dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:20px_20px] z-0 pointer-events-none" />

      {/* Main Card */}
      <div className="relative z-10 text-center px-14 py-16 bg-black/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(128,0,255,0.25)] max-w-4xl w-full border border-purple-800 border-opacity-30 transition-transform duration-300 hover:scale-[1.01]">
        <h1 className="text-white text-6xl md:text-7xl font-extrabold mb-8 tracking-widest drop-shadow-2xl animate-fade-in">
          Welcome to <span className="text-purple-500">EduBot LMS</span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
          AI-powered personalized learning platform.<br />
          Boost your knowledge, explore skills, and grow smarter every day.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 mt-6">
          <Link
            to="/login"
            className="px-10 py-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-10 py-4 bg-gradient-to-br from-purple-700 to-pink-700 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
