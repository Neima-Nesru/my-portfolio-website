import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = ({ skills }) => {
  const graphicDesignRef = useRef(null);
  const uxUiDesignRef = useRef(null);
  const webDevRef = useRef(null);

  const graphicDesignInView = useInView(graphicDesignRef, { once: true });
  const uxUiDesignInView = useInView(uxUiDesignRef, { once: true });
  const webDevInView = useInView(webDevRef, { once: true });

  return (
    <div className='text-white text-left p-3 lg:ml-96'>
      <h3 className='text-xl md:text-3xl leading-tight py-5'>My Skills</h3>

      <div>
        <p>Graphic Designer</p>
        <div className='w-full md:w-1/2 h-2 bg-white m-5 ml-0 rounded relative'>
          <motion.div
            className='h-2 bg-purple-700 rounded'
            ref={graphicDesignRef}
            initial={{ width: '0%' }}
            animate={{ width: graphicDesignInView ? '94.3%' : '0%' }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.span
            className='absolute right-0 top-[-20px] text-xs text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: graphicDesignInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            94.3%
          </motion.span>
        </div>

        <p>UX/UI Designer</p>
        <div className='w-full md:w-1/2 h-2 bg-white m-5 ml-0 rounded relative'>
          <motion.div
            className='h-2 bg-purple-700 rounded'
            ref={uxUiDesignRef}
            initial={{ width: '0%' }}
            animate={{ width: uxUiDesignInView ? '78.8%' : '0%' }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.span
            className='absolute right-0 top-[-20px] text-xs text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: uxUiDesignInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            78.8%
          </motion.span>
        </div>

        <p>Web Developer</p>
        <div className='w-full md:w-1/2 h-2 bg-white m-5 ml-0 rounded relative'>
          <motion.div
            className='h-2 bg-purple-700 rounded'
            ref={webDevRef}
            initial={{ width: '0%' }}
            animate={{ width: webDevInView ? '85%' : '0%' }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.span
            className='absolute right-0 top-[-20px] text-xs text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: webDevInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            85%
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
