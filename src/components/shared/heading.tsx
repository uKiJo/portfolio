import React from 'react';

interface HeadingProps {
  children: string;
  style: string;
}

const Heading: React.FC<HeadingProps> = ({ children, style }) => {
  return (
    <h1 className={`mb-12 text-5xl font-poppins font-bold ${style}`}>
      {children}
    </h1>
  );
};

export default Heading;
