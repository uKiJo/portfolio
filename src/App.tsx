import { Location, Route, Routes, useLocation } from 'react-router-dom';

import { useEffect } from 'react';

import { useTransition, useSpringRef, animated, useSpring } from 'react-spring';
import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Skills from './pages/skills/skills';
import ThemeContextWrapper from './context/ThemeContextWrapper';

function App() {
  let { pathname } = useLocation();

  const transRef = useSpringRef();
  const [transitions, api] = useTransition(pathname, () => ({
    ref: transRef,
    keys: null,
    from: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.8 },
    exitBeforeEnter: true,
  }));

  useEffect(() => {
    transRef.start();
  }, [pathname]);

  return (
    <div className="App relative dark:text-white transition p-2">
      <ThemeContextWrapper>
        <Navbar />
        {transitions((style, item) => (
          <animated.div className="w-full pb-12" style={style}>
            <Routes location={item}>
              <Route path="/" element={<Homepage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route />
            </Routes>
          </animated.div>
        ))}
      </ThemeContextWrapper>
    </div>
  );
}

export default App;
