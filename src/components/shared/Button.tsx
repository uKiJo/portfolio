import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="mt-10 inline-block bg-lsecondary text-primary font-bold md:px-8 py-2 xs:px-6 dark:bg-lsecondary hover:shadow-card transition"
    >
      {children}
    </Link>
  );
};

export default Button;
