# React + TypeScript + Vite

---

## Module 6 Assignment: Routing and Dashboard Setup

Overview
This project is a Learning Management System (LMS) frontend built with React, TypeScript, TanStack Router, and Tailwind CSS. The application demonstrates modern routing, authentication, and dynamic, role-based dashboard rendering for three user types: Student, Instructor, and Admin.

## Features
Modern Routing: Uses TanStack Router for navigation between Home, Login, Register, and Dashboard pages.

Role-Based Dashboards: Displays a unique dashboard layout for each user role (Student, Instructor, Admin).

JWT-based Authentication: Simulates authentication and role detection using JWT tokens.

Responsive UI: All pages are styled with Tailwind CSS, featuring dark mode, gradients, and interactive effects.

Component Modularity: Each dashboard and page is implemented as a separate, reusable React component.

--- 

## Project Structure

vite/
  └─ src/
  
      ├─ assets/ 
      
      ├─ pages/
      
      │    ├─ dashboards/
      
      │    │    ├─ AdminDashboard.tsx
      
      │    │    ├─ InstructorDashboard.tsx

      │    │    └─ StudentDashboard.tsx
      
      │    ├─ Home.tsx
      
      │    ├─ Login.tsx
      
      │    ├─ Register.tsx
      
      │    └─ Dashboard.tsx
      
      ├─ routes/
      
      │    └─ router.tsx
      
      ├─ utils/
      
      │    └─ auth.ts
      
      ├─ App.tsx
      
      ├─ index.css
      
      └─ main.tsx
      
  ├─ public
  
  ├─ package.json
  
  ├─ tailwind.config.js
  
  └─ README.md

---

## Implementation Detail
1. Routing Setup
  All navigation is handled by TanStack Router.
  
  Main routes include: Home (/), Login (/login), Register (/register), and Dashboard            (/dashboard).
  
  The router is configured in src/routes/router.tsx and provided to the app in main.tsx.

2. Authentication & Role Management
  Authentication is simulated using JWT tokens stored in localStorage.
  
  On login, a dummy JWT is generated containing the user’s role.
  
  Helper functions in src/utils/auth.ts decode the JWT and extract the user’s role for          dashboard rendering and route protection.

3. Role-Based Dashboard Rendering
  The Dashboard page (src/pages/Dashboard.tsx) checks the user’s role and displays the corresponding dashboard component:
  
  StudentDashboard.tsx
  
  InstructorDashboard.tsx
  
  AdminDashboard.tsx
  
  Each dashboard is visually distinct and tailored to its role, featuring cards, stats, and navigation relevant to the user type.

4. UI/UX and Styling
  All pages use a dark/gradient theme for consistency.
  
  Tailwind CSS utility classes are used for rapid styling, responsive layouts, and interactive effects (hover, focus, transitions).
  
  Home, Login, and Register pages are visually engaging, with animated backgrounds and modern   form elements.

5. Demo Authentication
   For demonstration, any mails will work and we should login with the same as registered details


## Prerequisites

Node.js and npm installed on your machine.


### Notes
No backend/API is required for this assignment. All authentication and user data are simulated in the frontend.

If backend integration is required, a simple Express server can be added for real registration and login.

The UI is fully responsive and works on all modern browsers.
