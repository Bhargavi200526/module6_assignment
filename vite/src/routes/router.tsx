import {
  Router,
  RootRoute,
  Route,
  Outlet,
} from '@tanstack/react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import { requireRole } from '../utils/auth';

const rootRoute = new RootRoute({
  component: () => <Outlet />, // MUST BE CLEAN
});

// Child routes
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
});

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
  beforeLoad: async () => {
    requireRole(['student', 'instructor', 'admin']);
  },
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  registerRoute,
  dashboardRoute,
]);

export const router = new Router({ routeTree });
