import React from 'react'
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className='text-white pb-8 my-20'>
      <h3 className='text-4xl leading-tight py-5'>
        I'm available for Internship & Freelancing.
      </h3>

      <div className="flex justify-center mt-12">
          <motion.a
            href="tel:+251974436829"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='bg-none border border-white hover:bg-purple-900 hover:border-purple-900 transition duration-300 block px-7 py-2 rounded'
          >
            Hire Me
          </motion.a>
        </div>
    </div>
  )
}

export default CTA