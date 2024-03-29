import React from "react";

import { useTrail, useSpring, animated } from "react-spring";

import Card from "../../components/card/card";
import Heading from "../../components/shared/heading";

import { data as projects } from "../../components/latest-work/data";

interface ProjectsProps {}

interface TrailProps {
  children: React.ReactNode;
}

const Projects: React.FC<ProjectsProps> = (props) => {
  const projectProp = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 700,
  });

  return (
    <section className="app-container sm:w-4/5 mx-auto">
      <div>
        <Heading style="dark:text-txt text-lgrey sm:text-start xs:text-center">
          Projects
        </Heading>
        <animated.div
          style={projectProp}
          className="flex sm:justify-start xs:justify-center font-poppins md:gap-10 xs:gap-6 flex-wrap bp:pb-6 bp:p-0 xs:p-6"
        >
          <Trail>
            {projects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </Trail>
        </animated.div>
      </div>
    </section>
  );
};

const Trail: React.FC<TrailProps> = ({ children }) => {
  const items = React.Children.toArray(children);
  console.log(items);
  const trail = useTrail(items.length, {
    // config: { mass: 5, tension: 2000, friction: 200, duration: 500 },
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 500,
  });
  return (
    <>
      {trail.map((style, index) => (
        <animated.div key={index} className="flex" style={style}>
          {items[index]}
          {/* <animated.div style={{ height }}>{items[index]}</animated.div> */}
        </animated.div>
      ))}
    </>
  );
};

export default Projects;
