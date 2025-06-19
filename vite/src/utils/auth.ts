

import {jwtDecode} from "jwt-decode";

export interface UserPayload {
  role: "student" | "instructor" | "admin";
  name: string;
}


export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return JSON.parse(atob(token)); // decode fake base64 token
  } catch (e) {
    return null;
  }
}



// Protect route
export function requireRole(roles: string[]) {
  const user = getUserFromToken();
  if (!user || !roles.includes(user.role)) {
    window.location.href = "/login";
  }
}
