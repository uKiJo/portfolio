import React from 'react';

import { useTrail, animated } from 'react-spring';

import Card from '../../components/card/card';
import Heading from '../../components/shared/heading';

import { data as projects } from '../../components/latest-work/data';

interface ProjectsProps {}

interface TrailProps {
  children: React.ReactNode;
}

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <section className="app-container mb-24">
      <div>
        <Heading style="dark:text-txt text-lgrey">Projects</Heading>
        <div className="flex gap-10 font-poppins">
          <Trail>
            {projects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </Trail>
        </div>
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
