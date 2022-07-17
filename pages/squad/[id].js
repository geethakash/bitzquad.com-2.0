import React from 'react';
import { motion } from 'framer-motion';
import { CollaborateImg } from '../../constants/images';
import Link from 'next/link';

function index() {
  return (
    <>
      <div className="absolute flex h-screen w-full flex-row-reverse ">
        <Link href="/squad">
          <motion.div className="relative aspect-video h-full w-1/2">
            <motion.img
              transition={{ duration: 1 }}
              layoutId="userImg"
              className="z-10 w-full object-cover"
              src="https://i.postimg.cc/KzScCZfV/andrew-power-9-ZXp-KFl-Qkjo-unsplash-removebg-preview.png"
            />
          </motion.div>
        </Link>
        <div className="h-full w-1/2 object-cover">
          <span className="top-0"></span>
        </div>
      </div>
    </>
  );
}

export default index;
