import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CollaborateImg } from '../../constants/images';
import { LayoutSubPages } from '../../components';
import Link from 'next/link';
import { members } from '../../constants/members';

const cardColors = [
  '#9FD0FB',
  '#E6CAA4',
  '#98A8FF',
  '#F5F5F5',
  '#C9DBCC',
  '#F5F5F5',
  '#9FD0FB',
];

function index() {
  return (
    <LayoutSubPages>
      <div
        data-scroll-section
        className="bz-container relative mx-auto mt-0 h-full w-full bg-gray-50 md:bg-transparent lg:mt-52"
      >
        <div className=" py-10 lg:px-10 lg:py-0">
          <h1 className="text-3xl font-semibold lg:text-5xl">Our Squad</h1>
          <p className="mt-4 text-sm font-semibold leading-6 tracking-widest text-gray-500 lg:mt-5 lg:text-xl xl:w-7/12">
            We are passionate to build new digital products for a better future
            by collaborating with new clients.
          </p>
          <div className="mt-5 flex gap-x-4 text-lg">
            <span className="underline">All</span>
            <span className="underline-link">Technical</span>
            <span className="underline-link">Management</span>
          </div>
        </div>
        <motion.div className="mb-20 grid grid-cols-2 gap-y-3 gap-x-4 md:grid-cols-3 lg:mt-20 lg:gap-y-12  lg:gap-x-12 lg:px-10">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </LayoutSubPages>
  );
}

export const MemberCard = ({ member, index }) => {
  return (
    <Link href={`/squad/${member.id}`}>
      <div>
        <motion.div
          className="relative aspect-square object-cover"
          style={{
            backgroundColor:
              member.bgColor || cardColors[index % cardColors.length],
          }}
          transition={{ duration: 1 }}
        >
          <motion.img src={member.img} className=" w-full" />
        </motion.div>
        <div className="">
          <h3 className="mt-1 text-base font-bold uppercase lg:mt-4 lg:text-3xl">
            {member.firstName} {member.lastName}
          </h3>

          <h5 className=" text-sm text-gray-500 lg:text-xl">
            {member.role.text}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default index;
