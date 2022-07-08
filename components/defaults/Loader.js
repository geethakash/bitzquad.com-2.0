import React, { useEffect } from 'react';
import { Logo } from '../../constants/images';
import { motion, AnimatePresence } from 'framer-motion';

function Loader({ setLoading }) {
  return (
    <div className="loader ">
      <div className="relative flex h-full w-full items-center justify-center">
        {/* <div className="loader-circle circle-1"></div>
        <div className="loader-circle circle-2"></div>
        <div className="loader-circle circle-3"></div> */}
        <div className="relative aspect-square w-8/12 rounded-full  p-20 xl:w-[400px]">
          <motion.img
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,

              transition: {
                // delay: 1,
                duration: 1,
                ease: 'easeInOut',
              },
            }}
            onAnimationComplete={() => setTimeout(() => setLoading(false), 500)}
            layoutId="landing-logo-image"
            src={Logo.src}
            alt="BZ-logo"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
