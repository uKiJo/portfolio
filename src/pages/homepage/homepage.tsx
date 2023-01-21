import React from 'react';
import Hero from '../../components/hero/hero';
import LatestWork from '../../components/latest-work/latestWork';
import Navbar from '../../components/navbar/navbar';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = (props) => {
  return (
    <section className="app-container md:w-4/5 mx-auto">
      <Hero />
      <LatestWork />
    </section>
  );
};

export default Homepage;
