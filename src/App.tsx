import {
  Location,
  Route,
  Routes,
  useRoutes,
  useLocation,
  Outlet,
} from 'react-router-dom';

import { useEffect, useRef } from 'react';
import { useTransition, useSpringRef, animated, useSpring } from 'react-spring';
import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Skills from './pages/skills/skills';
import Project from './components/project/project';
import ThemeContextWrapper from './context/ThemeContextWrapper';
import ErrorPage from './components/errorPage/errorPage';
import { useAnimatedRoutesTransition } from './hooks/useAnimatedRoutesTransition';

function App() {
  const [transitions] = useAnimatedRoutesTransition();

  return (
    <div className="App dark:text-white transition">
      <ThemeContextWrapper>
        <Navbar />
        <Outlet />

        {/* {transitions((style, item) => (
          <animated.div className="w-full pb-12" style={style}>
            {/* <Routes location={item}>
              <Route
                path="/"
                element={<Homepage />}
                errorElement={<ErrorPage />}
              />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:projectId" element={<Project />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route />
            </Routes> 
          </animated.div>
        ))} */}
      </ThemeContextWrapper>
    </div>
  );
}

export default App;
