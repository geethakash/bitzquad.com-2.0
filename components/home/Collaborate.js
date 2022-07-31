import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CollaborateImg } from '../../constants/images';
import { Button } from '..';
import Link from 'next/link';

function Collaborate() {
  return (
    <div className="collaborate_ md:!max-w-full lg:!container">
      <div className="collaborate__bgwrapper">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
        >
          Collaborate with Us
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
          className="collaborate__content"
        >
          <div className="collaborate__content_text">
            <p>
              We are passionate to build new digital products for a better
              future by collaborating with new clients. If you have an idea to
              create a new digital product for your business needs or any other
              questions, inquire us. Our team/specialists are always available
              to help you.
            </p>
            {/* <button className="talk-btn">Let&quot;s Talk</button> */}
            <Button className="talk-btn " parentClassName="px-0">
              Let's Talk
            </Button>
          </div>
          <Link href="/squad">
            <div className="collaborate__content_image">
              <motion.img src={CollaborateImg.src} layoutId="userImg" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
export default Collaborate;
