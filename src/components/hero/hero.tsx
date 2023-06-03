import React, { useState } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { Link } from "react-router-dom";

import "./hero.scss";
import illustration from "../../assets/illustration.svg";

interface TrailProps {
  children: React.ReactNode;
}

const Hero: React.FC = () => {
  const imageAnimation = useSpring({
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
            <h1 className="lg:text-6xl md:text-[44px] sm:text-4xl xs:text-3xl font-semibold leading-14 md:mb-10 xs:mb-6">
              Hi, I am Youn<span className="text-lsecondary">e</span>s
            </h1>

            <p className="lg:text-[22px] lg:leading-8 md:text-xl xs:text-base lg:max-w-md md:max-w-sm font-light text-txt-secondary md:mb-10 xs:mb-6 ">
              Welcome to my frontend development portfolio, where i bring ideas
              to life by transforming them into visually stunning apps. Let's
              collaborate and build something amazing together!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-lsecondary text-primary font-bold md:px-8 py-2 xs:px-6 dark:bg-lsecondary hover:shadow-card transition rounded"
            >
              Contact me
            </Link>
          </Trail>
        </div>

        <animated.div
          className="lg:w-[350px] md:w-72 xs:w-60 xs:mt-12"
          style={imageAnimation}
        >
          <img src={illustration} alt="me" />
        </animated.div>
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
