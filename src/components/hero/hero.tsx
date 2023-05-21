import React, { useState } from "react";
import "./hero.scss";

import illustration from "../../assets/illustration.svg";

import { useSpring, useTrail, animated } from "react-spring";
import { Link } from "react-router-dom";

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
      <div className="flex md:flex-row xs:flex-col justify-between items-center h-min font-poppins text-primary dark:text-txt">
        <div className="content">
          <Trail>
            <h1 className="lg:text-6xl md:text-5xl xs:text-4xl font-semibold leading-14 mb-10">
              Hi, I am Youn<span className="text-lsecondary">e</span>s
            </h1>

            <p className="lg:text-2xl md:text-xl xs:text-base lg:max-w-md sm:max-w-sm xs:max-w-[260px] font-light text-txt-secondary">
              Welcome to my frontend development portfolio, where i bring ideas
              to life by transforming them into visually stunning apps. Let's
              collaborate and build something amazing together!
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-block bg-lsecondary text-primary font-bold md:px-8 py-2 xs:px-6 dark:bg-lsecondary hover:shadow-card transition"
            >
              Contact me
            </Link>
          </Trail>
        </div>

        <div className="lg:w-[350px] md:w-72 xs:w-64 xs:mt-12">
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
