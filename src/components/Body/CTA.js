import React from 'react'
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className='text-white pb-8 my-20'>
      <h3 className='text-4xl leading-tight py-5'>
        I'm available for Internship & Freelancing.
      </h3>

      <button className='bg-purple-900 px-7 py-2 rounded hover:bg-white hover:text-black hover:border-purple-900 transition duration-300'
      >
        Hire Me
      </button>
    </div>
  )
}

export default CTA