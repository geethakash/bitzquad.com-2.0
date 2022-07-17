import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CollaborateImg } from '../../constants/images';
import { LayoutMain } from '../../components';
import Link from 'next/link';

function index() {
  // const [selectedUser, setSelectedUser] = useState(false);
  const members = [
    {
      id: 1,
      firstName: 'Jeff',
      lastName: 'Daylan',
      role: 'Head of Operational',
      img: 'https://i.postimg.cc/KzScCZfV/andrew-power-9-ZXp-KFl-Qkjo-unsplash-removebg-preview.png',
    },
  ];
  return (
    <LayoutMain>
      <div className="relative h-full w-full">
        <motion.div className="mt-40 grid grid-cols-5 gap-x-20 px-20">
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
        <motion.div className="relative object-cover">
          <motion.img
            transition={{ duration: 1 }}
            layoutId="userImg"
            src={member.img}
            className="z-10 w-full"
          />
        </motion.div>
        <div className="">
          <h3 className="text-2xl font-bold">{member.firstName}</h3>
          <h4 className="text-xl font-bold">{member.lastName}</h4>
          <h5 className="text-sm font-bold">{member.role}</h5>
        </div>
      </div>
    </Link>
  );
};

export default index;
