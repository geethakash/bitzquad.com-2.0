import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Testimonial_1,
  Testimonial_2,
  Testimonial_3,
  Testimonial_4,
  Testimonial_5,
} from '../../constants/images';

const contentAnim = {
  initial: { x: '100%' },
  animate: {
    x: '0',
    transition: {
      duration: 1.6,
      ease: [0.77, 0, 0.18, 1],
    },
  },
  exit: {
    x: '-100%',
    transition: {
      // delay: 0.6,
      duration: 1.6,
      ease: [0.08, 0.82, 0.17, 1],
    },
  },
};

function CustomerFeedback() {
  const [testimonials] = useState([
    {
      name: 'Bobby Singer',
      role: 'CEO of ABC Holdings',
      text: 'Bitzquad is a great company to work with. They are very responsive and always provide a great service. I highly recommend them to anyone looking for a great company to work with.',
      img: Testimonial_1.src,
    },
    {
      name: 'Dean Winchester',
      role: 'Product Manager at Winchester Groups',
      text: "A customer review is a reflection of a customer's experience with your company's products or services. Reviews can be found on sites such as Google Reviews, Amazon, Yelp, and Facebook.",
      img: Testimonial_2.src,
    },
    {
      name: 'Anne Hathaway',
      role: 'CEO of Annie Company (pvt) LTD',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas, leo at mattis elementum, lacus enim facilisis tellus, ac pretium enim libero eget massa. Curabitur metus felis, pulvinar sed finibus nec, suscipit at urna. Donec rutrum elementum massa, sit amet tempus diam condimentum eget.',
      img: Testimonial_3.src,
    },
    {
      name: 'Deboro Desmond',
      role: 'CTO of Desmond Holdings',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas, leo at mattis elementum, lacus enim facilisis tellus, ac pretium enim libero eget massa. Curabitur metus felis, pulvinar sed finibus nec, suscipit at urna. Donec rutrum elementum massa, sit amet tempus diam condimentum eget.',
      img: Testimonial_4.src,
    },
    {
      name: 'Angie Holan',
      role: 'Product Manager at Amazon',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas, leo at mattis elementum, lacus enim facilisis tellus, ac pretium enim libero eget massa. Curabitur metus felis, pulvinar sed finibus nec, suscipit at urna. Donec rutrum elementum massa, sit amet tempus diam condimentum eget.',
      img: Testimonial_5.src,
    },
  ]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let i = testimonials.indexOf(selectedTestimonial);
      if (i < testimonials.length - 1) {
        i++;
        setSelectedTestimonial(testimonials[i]);
      } else {
        setSelectedTestimonial(testimonials[0]);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [selectedTestimonial]);

  return (
    <div className="testimonials_ ">
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
        Testimonials
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            // delay: 0.4,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
        className="testimonials__content__item"
      >
        <div className="testimonials__content__item_image">
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={testimonials.indexOf(selectedTestimonial)}
              initial={{ x: '100%' }}
              animate={{
                x: 0,
                transition: {
                  delay: 0.6,
                  duration: 1.6,
                  ease: [0.77, 0, 0.18, 1],
                },
              }}
              exit={{
                x: '100%',

                transition: {
                  duration: 1,
                  ease: [0.77, 0, 0.18, 1],
                },
              }}
              src={selectedTestimonial?.img}
              alt="testimonial"
            />
          </AnimatePresence>
        </div>
        <div className="testimonials__content__item_content">
          <div className="testimonials__content__item_content_user">
            <motion.div className="block aspect-square h-16 w-16 overflow-hidden  rounded-full lg:hidden">
              <AnimatePresence exitBeforeEnter>
                <motion.img
                  key={testimonials.indexOf(selectedTestimonial)}
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.8,
                      duration: 0.8,
                      ease: 'easeInOut',
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: '-100%',
                    transition: {
                      // delay: 0.8,
                      duration: 0.8,
                      ease: 'easeInOut',
                    },
                  }}
                  className=" w-full object-cover "
                  src={selectedTestimonial?.img}
                />
              </AnimatePresence>
            </motion.div>
            <div className="pl-3">
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  className="person"
                  key={testimonials.indexOf(selectedTestimonial)}
                  variants={contentAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {selectedTestimonial?.name}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  className="role"
                  key={testimonials.indexOf(selectedTestimonial)}
                  variants={contentAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {selectedTestimonial?.role}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.p
              className="text"
              key={testimonials.indexOf(selectedTestimonial)}
              variants={contentAnim}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {selectedTestimonial?.text}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            // delay: 0.4,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
        className="mx-auto mt-20 flex h-2 gap-x-4 px-5 lg:w-1/3 lg:px-0 "
      >
        {testimonials.map((testimonial, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setSelectedTestimonial(testimonial);
            }}
            className="relative h-full grow  rounded-full bg-gray-200 "
          >
            {testimonials.indexOf(selectedTestimonial) === index && (
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 50,
                  }}
                  layoutId="test_tab"
                  initial={false}
                  className="absolute top-0  left-0 z-10 h-full w-full rounded-full bg-gray-700"
                ></motion.div>
              </AnimatePresence>
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default CustomerFeedback;
