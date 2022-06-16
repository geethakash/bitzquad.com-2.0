import React from 'react';
import { LogoDark } from '../../constants/images';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
          ease: 'easeInOut',
        },
      }}
      className="navbar"
    >
      <a className="navbar-brand" href="#">
        <img className="h-10" src={LogoDark.src} />
      </a>
      <div className="navbar-links">
        <a
          className="navbar-link underline-link"
          href="#"
          data-cursor="-opaque"
        >
          About
        </a>
        <a
          className="navbar-link underline-link"
          href="#services"
          data-cursor="-opaque"
        >
          Services
        </a>
        <a
          className="navbar-link underline-link"
          href="#"
          data-cursor="-opaque"
        >
          Contact
        </a>
        <button className="menu-button" data-cursor="-opaque">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 19L3 12M3 12L10 5M3 12H21"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Menu
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
