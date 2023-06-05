import React from "react";
import { useSpring, animated } from "react-spring";

import Thumbnail from "../thumbnail/thumbnail";
import { data as projects } from "./data";

interface LatestWorkProps {}

const LatestWork: React.FC<LatestWorkProps> = (props) => {
  const latestWorkAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    delay: 1000,
  });
  return (
    <animated.section className="mx-auto" style={latestWorkAnimation}>
      <h1 className="font-poppins text-4xl font-semibold text-primary dark:text-txt mb-8 md:text-start xs:text-center">
        Latest work
      </h1>
      <div className="flex gap-10 flex-wrap md:justify-start xs:justify-center bp:p-0 xs:p-4">
        {projects.map((project) => (
          <Thumbnail key={project.id} {...project} />
        ))}
      </div>
    </animated.section>
  );
};

export default LatestWork;
