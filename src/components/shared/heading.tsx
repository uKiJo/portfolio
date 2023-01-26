import React from 'react';

interface HeadingProps {
  children: string;
  style: string;
}

const Heading: React.FC<HeadingProps> = ({ children, style }) => {
  return (
    <h1
      className={`md:mb-12 xs:mb-6 sm:text-5xl xs:text-3xl font-poppins font-bold ${style}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
