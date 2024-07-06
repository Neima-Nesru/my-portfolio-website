import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='text-white mt-10 pt-20 pb-10 border-t border-gray-500'>
      <div className='container mx-auto flex items-center justify-center pb-2'>
        <a href="https://www.linkedin.com/in/neima-nesru-633a5024"><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-500 hover:text-white transition duration-300 p-2" /></a>
        <a href="https://github.com/Neima-Nesru"><FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-500 hover:text-white transition duration-300 p-2" /></a>
        <a href="https://facebook.com/Neima Nesru"><FontAwesomeIcon icon={faFacebook} size="2x" className="text-gray-500 hover:text-white transition duration-300 p-2" /></a>
        <a href="https://twitter.com/NeimaNesru/"><FontAwesomeIcon icon={faTwitter} size="2x" className="text-gray-500 hover:text-white transition duration-300 p-2" /></a>
      </div>

      <p className='text-gray-500'>
      © copyright Neima | 2024 All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer