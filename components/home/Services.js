import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServicesImg } from '../../constants/images';

function Services() {
  return (
    <div className="services_">
      <div className="services__bgwrapper">
        <div className="services__content_wrapper mt-0">
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
            <span>Explore Our</span>
            <br />
            SERVICES
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
            className="services__content"
          >
            <div className="services__content_grid">
              <div className="card">
                <h4 className="card_title">Information Systems</h4>
                <p className="card_text">
                  We provide end-to-end solutions for information systems
                  development, management, and support. We can help you with any
                  of the following:
                </p>
                <a href="#" className="card_button">
                  see more
                </a>
              </div>
              <div className="card">
                <h4 className="card_title">Business Process Reengineering</h4>
                <p className="card_text">
                  We provide end-to-end solutions for information systems
                  development, management, and support.
                </p>
                <a href="#" className="card_button">
                  see more
                </a>
              </div>
              <div className="card">
                <h4 className="card_title">E-Business</h4>
                <p className="card_text">
                  We provide end-to-end solutions for information systems
                  development, management, and support.
                </p>
                <a href="#" className="card_button">
                  see more
                </a>
              </div>
              <div className="card">
                <h4 className="card_title">
                  Brand Designing & Digital Marketing
                </h4>
                <p className="card_text">
                  We provide end-to-end solutions for information systems
                  development, management, and support.
                </p>
                <button className="card_button">see more</button>
              </div>
            </div>
            <div className="services__content_image">
              <motion.img src={ServicesImg.src} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
