import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useSprings, animated } from 'react-spring';

import Heading from '../../components/shared/heading';

import sprite from './sprite.svg';
import tools from './tools.svg';
import { data as techs } from './data.js';

import './skills.scss';
interface SkillsProps {}

const Skills: React.FC<SkillsProps> = (props) => {
  const [springs] = useSprings(techs.length, (i) => ({
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    delay: i * 100,
  }));
  return (
    <section className="app-container ">
      <Heading style="dark:text-txt text-lgrey">Skills</Heading>
      <div className="flex justify-between">
        <div className="font-poppins text-txt-secondary text-xl mb-12 w-1/2">
          <div className="mb-12">
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
          <div style={props} className="flex flex-wrap">
            {springs.map((props, i) => (
              <animated.div key={i} style={props}>
                <Tooltip.Provider key={techs[i].id}>
                  <Tooltip.Root>
                    <Tooltip.Trigger className="mr-4 mb-4">
                      <div className="p-4 dark:bg-lprimary dark:shadow-none shadow-card4 rounded">
                        <svg className="w-8 h-8">
                          <use href={sprite + `#icon-${techs[i].svg}`} />
                        </svg>
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="TooltipContent dark:bg-txt">
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
        <div>
          <img src={tools} alt="tools" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
