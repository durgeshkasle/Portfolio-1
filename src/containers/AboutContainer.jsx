import React from 'react';
import Hero from '../components/aboutComponents/Hero';
import Experience from '../components/aboutComponents/Experience';
import Education from '../components/aboutComponents/Education';
import Stats from '../components/aboutComponents/Stats';

const AboutContainer = () => {
  return (
    <div>
      <Hero />
      <Experience/>
      <Education/>
      <Stats/>
    </div>
  );
};

export default AboutContainer;
