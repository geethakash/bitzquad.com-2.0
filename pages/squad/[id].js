import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FounderRole } from '../../constants/images';

export const getStaticPaths = async () => {
  const { members } = await import('../../constants/members');
  const paths = members.map((member) => ({
    params: { id: member.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { members } = await import('../../constants/members');
  const id = context.params.id;
  const member = members.find((member) => member.id === Number(id));

  return {
    props: { member },
  };
};

function index({ member }) {
  return (
    <>
      {/*   bg-gradient-to-tl from-purple-800/30 */}
      <div className="relative flex h-screen overflow-hidden">
        <div className="flex h-full flex-auto flex-col justify-between object-cover pr-20 pl-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.65, 0.05, 0.36, 1],
            }}
            exit={{ opacity: 0 }}
          >
            <h1 className="mt-40 text-6xl font-bold uppercase">
              {member.firstName} {member.lastName}
            </h1>
            <h2 className="mt-2 text-4xl font-extralight text-gray-600">
              {member.role.text}
            </h2>
            <p className=" mt-10  text-4xl font-medium text-gray-500">
              {member.description}
            </p>
          </motion.div>
          <div className="squad_social_links z-10 mt-20 inline-block rounded-full py-10  text-3xl ">
            {member.social.map((social, index) => (
              <span key={index} className="pr-10">
                <a
                  href={social.url}
                  rel="noreferrer"
                  target="_blank"
                  className="underline-link text-purple-500 hover:text-purple-700"
                >
                  {social.name}
                </a>
              </span>
            ))}
          </div>
        </div>
        <Link href="/squad">
          <motion.div
            className="relative flex aspect-video h-full w-1/3"
            transition={{ duration: 1 }}
            layoutId={`member-img-${member?.id}`}
          >
            <motion.img
              className="z-40 w-full object-cover"
              src={member?.img}
            />
          </motion.div>
        </Link>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.4,
            duration: 1.6,
            ease: [0.65, 0.05, 0.36, 1],
          }}
          className="absolute bottom-0 left-0 h-1/2 px-10"
          src={FounderRole.src}
        />
      </div>
    </>
  );
}

export default index;
