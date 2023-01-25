import React from 'react';

import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="md:w-64 md:h-96 xs:w-60 p-6 flex flex-col shadow-card3 hover:shadow-card4 dark:hover:shadow-none transition rounded-md overflow-hidden bg-grey dark:bg-lprimary cursor-pointer hover:-translate-y-1">
      <div className="grow rounded-lg items-center">
        <div className="p-4 dark:bg-gradient-180 dark:from-lgrey-0 dark:to-lgrey rounded-lg">
          <img className="h-2/3 rounded " src={image} alt={title} />
        </div>
      </div>
      <div className="w-full text-lgrey dark:text-txt ">
        <h1 className="text-lg font-semibold my-2">{title}</h1>
        <p className="text-sm text-txt-secondary mb-8"> {description} </p>
        <div className="h-[1px] w-full bg-txt-secondary opacity-50 mb-4"></div>
        <div className="flex">
          <FiExternalLink
            className=" mr-4 dark:stroke-txt stroke-lgrey cursor-pointer hover:stroke-lsecondary dark:hover:stroke-lsecondary transition"
            size={20}
          />
          <FiGithub
            className="dark:stroke-txt stroke-lgrey cursor-pointer hover:stroke-lsecondary dark:hover:stroke-lsecondary transition"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
