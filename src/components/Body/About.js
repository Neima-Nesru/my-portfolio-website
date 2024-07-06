import React from 'react';
import AboutImage from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-6'>
      <div className='w-full md:w-1/2 p-6 md:ml-10 mt-10'>
        <img src={AboutImage} alt='About Image' className='w-full h-auto rounded' />
      </div>
      <div className='w-full md:w-1/2 p-6 md:ml-10 mt-10'>
        <div className='text-left text-white'>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">ABOUT ME</h1>
          <h3 className='mb-4 text-gray-400'>Why you hire me?</h3>
          <p>
            When you choose to work with me, you're not just hiring a graphic designer, website designer, or developer – you're gaining a versatile creative partner committed to realizing your vision with precision and passion.
          </p>
          <p>
            With a comprehensive skill set spanning across graphic design, web design, and development, I bring a unique blend of artistic flair and technical proficiency to every project.
          </p>
          <p className='mt-5'>
            Let's collaborate to bring your ideas to life and create experiences that leave a lasting impact.
          </p>
        </div>
        <div className='container mx-auto flex items-start justify-start py-5'>
        <a href="https://www.linkedin.com/in/neima-nesru-633a5024"><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-purple-800 transition duration-300 p-2 pl-0" /></a>
        <a href="https://github.com/Neima-Nesru"><FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-purple-800 transition duration-300 p-2" /></a>
        <a href="https://facebook.com/Neima Nesru"><FontAwesomeIcon icon={faFacebook} size="2x" className="text-white hover:text-purple-800 transition duration-300 p-2" /></a>
        <a href="https://twitter.com/NeimaNesru/"><FontAwesomeIcon icon={faTwitter} size="2x" className="text-white hover:text-purple-800 transition duration-300 p-2" /></a>
      </div>
      </div>
    </div>
  );
}

export default About;
