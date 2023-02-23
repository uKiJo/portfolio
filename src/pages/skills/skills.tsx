import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  useSpring,
  useSprings,
  useChain,
  animated,
  useSpringRef,
} from 'react-spring';

import Heading from '../../components/shared/heading';

import sprite from './sprite.svg';
import tools from './tools.svg';
import { data as techs } from './data.js';

import './skills.scss';
interface SkillsProps {}

const Skills: React.FC<SkillsProps> = (props) => {
  const iconsRef = useSpringRef();
  const skillRef = useSpringRef();

  const [springs] = useSprings(techs.length, (i) => ({
    ref: iconsRef,
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    delay: i * 100,
  }));

  const skillProps = useSpring({
    ref: skillRef,
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    delay: 700,
  });

  useChain([skillRef, iconsRef], [0, 1]);

  return (
    <section className="app-container sm:w-4/5 mx-auto">
      <Heading style="dark:text-txt text-lgrey sm:text-start xs:text-center">
        Skills
      </Heading>
      <animated.div
        style={skillProps}
        className="flex md:flex-row xs:flex-col md:justify-between md:items-start xs:items-center sm:p-0 xs:p-6"
      >
        <div className="font-poppins text-txt-secondary md:text-xl xs:text-base mb-12 md:w-1/2 xs:w-full md:order-first xs:order-last">
          <div className="mb-8">
            <p>
              Though necessary, i believe technologies we use to build our
              products are only tools and not what matters the most.
            </p>
            <p>
              In fact what matters is that we solve the problem the right way
              using the right tools.
            </p>
            <p>As a frontend developer, i mainly use the stack stated below:</p>
          </div>
          <div style={props} className="flex flex-wrap gap-4">
            {springs.map((props, i) => (
              <animated.div key={i} style={props} className="h-16">
                <Tooltip.Provider key={techs[i].id}>
                  <Tooltip.Root>
                    <Tooltip.Trigger className="gap-8">
                      <div className="p-4 dark:bg-lprimary bg-white dark:shadow-none shadow-card4 rounded">
                        <svg className="w-8 h-8">
                          <use href={sprite + `#icon-${techs[i].svg}`} />
                        </svg>
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="TooltipContent dark:bg-txt bg-white">
                        {techs[i].name}
                        <Tooltip.Arrow className="dark:fill-txt fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </animated.div>
            ))}
          </div>
        </div>
        <div className="lg:w-fit sm:w-72 xs:w-64 xs:mb-8">
          <img src={tools} alt="tools" />
        </div>
      </animated.div>
    </section>
  );
};

export default Skills;
