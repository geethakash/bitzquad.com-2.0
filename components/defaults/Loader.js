import React, { useEffect } from 'react';
import { Logo } from '../../constants/images';
import { motion } from 'framer-motion';

function Loader({ setLoading }) {
  return (
    <div className="loader ">
      <div className="w-full h-full flex justify-center items-center relative">
        {/* <div className="loader-circle circle-1"></div>
        <div className="loader-circle circle-2"></div>
        <div className="loader-circle circle-3"></div> */}
        <div className="xl:w-[400px] w-8/12 aspect-square relative  rounded-full p-20">
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                // delay: 1,
                duration: 1,
                ease: 'easeInOut',
              },
            }}
            onAnimationComplete={() => setLoading(false)}
            exit={{ scale: 0, opacity: 0 }}
            layoutId="landing-logo-image"
            src={Logo.src}
            alt="BZ-logo"
            className="object-cover h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
