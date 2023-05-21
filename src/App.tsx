import {
  Location,
  Route,
  Routes,
  useRoutes,
  useLocation,
  Outlet,
} from "react-router-dom";

import { useEffect, useRef } from "react";
import { useTransition, useSpringRef, animated, useSpring } from "react-spring";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import ThemeContextWrapper from "./context/ThemeContextWrapper";

function App() {
  return (
    <div className="dark:text-white transition">
      <ThemeContextWrapper>
        <Navbar />
        <Outlet />
      </ThemeContextWrapper>
    </div>
  );
}

export default App;
