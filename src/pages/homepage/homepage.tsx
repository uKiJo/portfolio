import React from "react";
import Hero from "../../components/hero/hero";
import LatestWork from "../../components/latest-work/latestWork";

const Homepage: React.FC = () => {
  return (
    <section className="app-container sm:w-4/5 mx-auto pb-10">
      <Hero />
      <LatestWork />
    </section>
  );
};

export default Homepage;
