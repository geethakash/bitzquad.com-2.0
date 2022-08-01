import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Services() {
  return (
    <>
      <ServiceCard
        title={'Information Systems'}
        description={
          'We are passionate to build new digital products for a better future by collaborating with new clients. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you.'
        }
        buttonText={'Learn More'}
        color={'green'}
      />
      <ServiceCard
        title={'Business Process Re-engineering'}
        description={
          'The practice of rethinking and redesigning the way work is done to better support an organization&quot;s mission and reduce costs.'
        }
        buttonText={'Learn More'}
        color={'purple'}
      />
    </>
  );
}

function ServiceCard({ title, description, buttonText, color }) {
  return (
    <div className="servicecard_ md:!max-w-full lg:!container">
      <div className="servicecard__bgwrapper">
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
          {title}
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
          className="servicecard__content"
        >
          <div className="servicecard__content_text">
            <p>{description}</p>
            <button
              className={`learn-btn border-green-500 border-${color}-700 text-${color}-700`}
            >
              {buttonText}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 0.5,
            y: 0,
            transition: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
          className="servicecard__content_bigtxt"
          style={{ WebkitTextStrokeColor: `${color}` }}
        >
          {' '}
          SERVICES{' '}
        </motion.div>
      </div>
      <div className="hidden border-green-700 "></div>
    </div>
  );
}

export default Services;
