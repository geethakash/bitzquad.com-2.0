import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import OurTeamCard from "./OurTeamCard";

const Members = [
  {
    name: "John Doe",
    title: "CEO",
    image:
      "https://media.istockphoto.com/photos/content-woman-sitting-on-sofa-with-closed-eyes-breathing-air-picture-id1300340811?b=1&k=20&m=1300340811&s=170667a&w=0&h=aQ2wUgDEqHgoyhbFu47mZwxze5mnlTvTHG_pGaBUbCE=",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image:
      "https://nscdn.nstec.com/how-to-unblock-websites-on-android-without-vpn-.jpg",
  },
  {
    name: "John Doe",
    title: "CEO",
    image:
      "https://nscdn.nstec.com/how-to-unblock-websites-on-android-without-vpn-.jpg",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image:
      "https://nscdn.nstec.com/how-to-unblock-websites-on-android-without-vpn-.jpg",
  },
  {
    name: "John Doe",
    title: "CEO",
    image:
      "https://nscdn.nstec.com/how-to-unblock-websites-on-android-without-vpn-.jpg",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image:
      "https://nscdn.nstec.com/how-to-unblock-websites-on-android-without-vpn-.jpg",
  },
  {
    name: "John Doe",
    title: "CEO",
    image:
      "https://nscdn.nstec.com/how-to-unblock-websites-on-android-without-vpn-.jpg",
  },
];

function OurTeam() {
  return (
    <div className="ourteam_">
      <div className="ourteam__bgwrapper">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
          className="ourteam__content"
        >
          <AnimatePresence>
            {Members.map((member, index) => (
              <OurTeamCard
                key={index}
                name={member.name}
                title={member.title}
                imageurl={member.image}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: .5,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            // animate={{ x: '-120vw' }}
            // transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            // viewport={{ once: true }}
            className="ourteam__bigtxt"
          >
            <div>OUR TEAM</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
export default OurTeam;
