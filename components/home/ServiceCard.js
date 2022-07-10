import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ServiceCard({title, description,buttonText, color}) {
  return (
    <div className="servicecard_">
      <div className="servicecard__bgwrapper"> 
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
          {title}
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
          viewport={{ once: true }} className="servicecard__content">
          <div className="servicecard__content_text">
            <p>
                {description}
            </p>
            <button className={`learn-btn border-green-500 border-${color}-700 text-${color}-700`}>{buttonText}</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: .5,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
          className="servicecard__content_bigtxt" style={{'WebkitTextStrokeColor':`${color}`}}> SERVICES </motion.div>
      </div>
      <div className="hidden border-green-700 text-green-700 border-purple-700 text-purple-700"></div>
    </div>

  );
}
export default ServiceCard;
