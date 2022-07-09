import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CollaborateImg } from "../../constants/images";

function Collaborate() {
  return (
    <div className="collaborate_ lg:!container md:!max-w-full">
      <div className="collaborate__bgwrapper"> 
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
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
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }} className="collaborate__content">
          <div className="collaborate__content_text">
            <p>
              We are passionate to build new digital products for a better
              future by collaborating with new clients. If you have an idea to
              create a new digital product for your business needs or any other
              questions, inquire us. Our team/specialists are always available
              to help you.
            </p>
            <button className="talk-btn">Let&quot;s Talk</button>
          </div>
          <div className="collaborate__content_image">
            <img src={CollaborateImg.src} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Collaborate;
