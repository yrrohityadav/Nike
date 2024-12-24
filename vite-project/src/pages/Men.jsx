import React from 'react';
import Navbar from '../components/Navbar';
import SlidingText from '../components/SlidingText';
import Simple from '../components/Mens/Simple';
import SlidingShoesCard from "../components/Mens/SlidingShoesCard"

const Men = () => {
  return (
    <div>
      <Navbar />
      <SlidingText />
      <Simple />
      <SlidingShoesCard/>
    </div>
  );
};

export default Men;
