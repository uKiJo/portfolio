import React from "react";

interface DescriptionProps {
  children: string;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <div className="mb-8 ">
      <p className="lg:text-[22px] lg:leading-8 md:text-xl xs:text-base md:max-w-md  font-light sm:m-0 xs:m-auto dark:text-dgrey text-lgrey">
        {children}
      </p>
    </div>
  );
};

export default Description;
