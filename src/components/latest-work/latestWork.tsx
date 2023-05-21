import React from "react";
import Thumbnail from "../thumbnail/thumbnail";

import { data as projects } from "./data";

interface LatestWorkProps {}

const LatestWork: React.FC<LatestWorkProps> = (props) => {
  return (
    <section className="mx-auto">
      <h1 className="font-poppins text-4xl font-semibold text-primary dark:text-txt mb-8 md:text-start xs:text-center">
        Latest work
      </h1>
      <div className="flex gap-10 flex-wrap md:justify-start xs:justify-center bp:p-0 xs:p-4">
        {projects.map((project) => (
          <Thumbnail key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
