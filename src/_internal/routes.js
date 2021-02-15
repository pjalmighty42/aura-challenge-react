// Globals
import React from "react";

// Components
import { Home } from "Internal/pages/Home";
import { Redux } from "pages/Redux";
import { Timer } from "pages/Timer";

// Sub-component
function NotFound() {
  return <span>404</span>;
}

// Routes
const routes = [
  {
    exact: true,
    component: Home,
    path: "/"
  },
  {
    component: Redux,
    path: "/redux"
  },
  {
    component: Timer,
    path: "/timer"
  },
  {
    component: NotFound
  }
];

export { routes };
