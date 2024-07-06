import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='text-white mt-40 px-4 sm:px-6 md:px-8'>
      <div className='text-center'>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-6">CONTACT</h1>
        <h3 className='mb-4 text-gray-400'>Feel free to contact me.</h3>
      </div>

      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center'>

        <div className='py-6 px-10'>
          <FontAwesomeIcon icon={faPhone} size="2x" className="text-purple-600 mb-2" />
          <h3 className='text-xl leading-tight'>+251 974-436-829</h3>
        </div>

        <div className='py-6 px-10'>
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-purple-600 mb-2" />
          <h3>neimanesru34@gmail.com</h3>
        </div>

        <div className='py-6 px-10 md:px-10'>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-purple-600 mb-2" />
          <h3 className='text-xl leading-tight'>Keranyo, Addis Ababa, Ethiopia</h3>
        </div>

      </div>
    </div>
  );
}

export default Contact;
