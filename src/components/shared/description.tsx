import React from "react";

interface DescriptionProps {
  children: string;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <div className="mb-8">
      <p className=" md:text-xl xs:text-base md:max-w-md  xs:max-w-[80%] font-light sm:m-0 xs:m-auto">
        {children}
      </p>
    </div>
  );
};

export default Description;
