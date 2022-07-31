import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CollaborateImg } from '../../constants/images';
import { LayoutMain } from '../../components';
import Link from 'next/link';
import { members } from '../../constants/members';

function index() {
  return (
    <LayoutMain>
      <div className="container relative mx-auto h-full w-full ">
        <motion.div className="mt-40 grid grid-cols-4 gap-x-20 px-20">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </LayoutMain>
  );
}

export const MemberCard = ({ member }) => {
  return (
    <Link href={`/squad/${member.id}`}>
      <div>
        <motion.div
          className="relative  object-cover"
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
