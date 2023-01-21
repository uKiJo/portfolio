import React, { useState } from 'react';
import './hero.scss';

import illustration from '../../assets/illustration.svg';

import { useSpring, useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';

interface TrailProps {
  children: React.ReactNode;
}

const Hero: React.FC = () => {
  const propss = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    delay: 1000,
  });

  return (
    <header className="mb-24">
      <div className="flex justify-between items-center h-min font-poppins text-primary dark:text-txt">
        <div className="content">
          <Trail>
            <h2 className="text-xl mb-2">Hi There,</h2>
            <h1 className="lg:text-6xl md:text-5xl font-bold leading-14 mb-6">
              I am Youn<span className="text-lsecondary">e</span>s
            </h1>
            <p className="lg:text-3xl md:text-2xl font-semibold leading-14">
              I am a Frontend developer.
            </p>
            <p className="lg:text-xl md:text-lg font-semibold">
              & i love building stuff on the web.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-lsecondary text-primary font-bold px-8 py-2 dark:bg-lsecondary hover:shadow-card transition"
            >
              Contact me
            </Link>
          </Trail>
        </div>

        <div className="lg:w-[350px] md:w-72">
          <img src={illustration} alt="me" />
        </div>
      </div>
    </header>
  );
};

const Trail: React.FC<TrailProps> = ({ children }) => {
  const items = React.Children.toArray(children);
  console.log(items);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
    delay: 500,
  });

  return (
    <>
      {trail.map((style, index) => (
        <animated.div key={index} className="trailsText" style={style}>
          {items[index]}
        </animated.div>
      ))}
    </>
  );
};

export default Hero;
