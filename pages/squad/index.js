import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CollaborateImg } from '../../constants/images';
import { LayoutMain } from '../../components';
import Link from 'next/link';
import { members } from '../../constants/members';

const cardColors = [
  '#9FD0FB',
  '#E6CAA4',
  '#E6E6E6',
  '#F5F5F5',
  '#C9DBCC',
  '#F5F5F5',
  '#9FD0FB',
];

function index() {
  return (
    <LayoutMain>
      <div className="container relative mx-auto h-full w-full ">
        <motion.div className="mt-40 grid grid-cols-4 gap-x-20 px-20">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </LayoutMain>
  );
}

export const MemberCard = ({ member, index }) => {
  return (
    <Link href={`/squad/${member.id}`}>
      <div>
        <motion.div
          className="relative aspect-square object-cover"
          style={{
            backgroundColor: cardColors[index % cardColors.length],
            // backgroundColor: '#D9D9D9',
          }}
          transition={{ duration: 1 }}
          layoutId={`member-img-${member.id}`}
        >
          <motion.img src={member.img} className="z-20 w-full" />
        </motion.div>
        <div className="">
          <h3 className="mt-5 text-3xl font-bold">
            {member.firstName} {member.lastName}
          </h3>

          <h5 className="mt-1 text-lg font-semibold text-gray-500">
            {member.role.text}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default index;
