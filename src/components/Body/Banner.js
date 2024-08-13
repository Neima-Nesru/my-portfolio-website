import React, { useEffect } from 'react';
import backgroundImage from '../../images/background.jpeg';
import { motion } from 'framer-motion';
import {Typed} from 'react-typed';

const Banner = () => {
  useEffect(() => {
    const typed = new Typed('.element', {
      strings: ["Graphic Designer,", "UX/UI Designer,", "Web Developer."],
      typeSpeed: 100,
      backSpeed: 100,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000,
    });

    return () => {
      typed.destroy(); // Cleanup function
    };
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Welcome to my creative Hub.
          <motion.span
            role="img"
            aria-label="Waving hand"
            animate={{ rotate: [0, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ display: 'inline-block' }}
          >
            😊
          </motion.span>
        </h1>

        <h3 className="text-xl md:text-4xl mb-6">
          I'm Neima Nesru,
        </h3>
        
        <h2 className='element inline text-4xl font-bold md:text-4xl mb-6 text-purple-500'></h2>

        <div className="flex justify-center mt-12">
          <motion.a
            href="/NeimaNesru_CV.pdf" // Replace with the actual name of your CV file
            download="NeimaNesru_CV.pdf"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='bg-none border border-white hover:bg-purple-900 hover:border-purple-900 transition duration-300 block px-7 py-2 rounded'
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
