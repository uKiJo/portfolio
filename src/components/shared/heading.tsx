import React from 'react';
import { animated, useSpring } from 'react-spring';

interface HeadingProps {
  children: string;
  style: string;
}

const Heading: React.FC<HeadingProps> = ({ children, style }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });
  return (
    <animated.h1
      style={props}
      className={`md:mb-12 xs:mb-6 sm:text-5xl xs:text-3xl font-poppins font-bold ${style}`}
    >
      {children}
    </animated.h1>
  );
};

export default Heading;
