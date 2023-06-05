import React from "react";
import { NavLink } from "react-router-dom";

import { FiExternalLink, FiGithub } from "react-icons/fi";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  repo: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  id,
  url,
  repo,
}) => {
  return (
    <NavLink
      to={`/projects/${id.toString()}`}
      className="md:w-64 md:h-96 xs:w-56 p-6 flex flex-col shadow-card3 hover:shadow-card5 dark:hover:shadow-none  rounded-md overflow-hidden bg-grey dark:bg-lprimary cursor-pointer "
    >
      <div className="rounded-lg items-center">
        <div className="p-4 dark:bg-gradient-180 dark:from-lgrey-0 dark:to-lgrey rounded-lg">
          <img className="h-2/3 rounded " src={image} alt={title} />
        </div>
      </div>
      <div className="grow flex flex-col w-full text-lgrey dark:text-txt">
        <div className="grow py-4">
          <h1 className="xs:mb-1 md:text-lg font-semibold">{title}</h1>
          <p className="md:text-sm xs:text-xs text-txt-secondary">
            {description}
          </p>
        </div>
        <div className="h-[1px] w-full bg-txt-secondary opacity-50 mb-4"></div>
        <div className="flex">
          <a
            className="p-2 dark:stroke-txt stroke-lgrey cursor-pointer hover:stroke-lsecondary dark:hover:stroke-lsecondary social-media"
            href={url}
          >
            <FiExternalLink size={20} />
          </a>
          <a
            className=" p-2 dark:stroke-txt stroke-lgrey cursor-pointer hover:stroke-lsecondary dark:hover:stroke-lsecondary social-media"
            href={repo}
          >
            <FiGithub size={20} />
          </a>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
