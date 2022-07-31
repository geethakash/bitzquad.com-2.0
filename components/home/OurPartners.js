import React from 'react';
import { Partner_deinclusive, Partner_wowhomies } from '../../constants/images';
import { motion } from 'framer-motion';

const partnerList = [
  {
    name: 'Deinclusive',
    url: 'https://deinclusive.com/',
    image: Partner_deinclusive.src,
  },
  {
    name: 'Wow Homies',
    url: 'https://wowhomies.com/',
    image: Partner_wowhomies.src,
  },
];

function OurPartners() {
  return (
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
      className="partners_container"
    >
      <h3>Our partners</h3>
      <div className="partners_card_container">
        {partnerList.map((partner, index) => (
          <div className="partners_card" key={index}>
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <img
                className="partners_card_image"
                src={partner.image}
                alt={partner.name}
              />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default OurPartners;
