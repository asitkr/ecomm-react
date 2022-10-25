// import React, { useContext } from 'react';
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/ProductContext';
// import { AppContext } from './context/ProductContext';

const About = () => {

  const { myName } = useProductContext();

  const data = {
    name: "thapa ecommerce",
  }

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  )
}

export default About;