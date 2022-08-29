import React, { useState } from "react";
import { motion } from "framer-motion";
import { CollaborateImg } from "../../constants/images";
import { LayoutSubPages } from "../../components";
import Link from "next/link";
import { members } from "../../constants/members";

const cardColors = ["#9FD0FB", "#E6CAA4", "#98A8FF", "#F5F5F5", "#C9DBCC", "#F5F5F5", "#9FD0FB"];

const types = [
    { name: "All", value: -1 },
    { name: "Technical", value: 0 },
    { name: "Management", value: 1 },
];

function index() {
    const [selCat, setSelCat] = useState(-1);
    return (
        <LayoutSubPages>
            <div data-scroll-section className="bz-container relative mx-auto mt-0 h-full w-full bg-gray-50 md:bg-transparent lg:mt-44">
                <div className=" py-10 lg:px-5 lg:py-0">
                    <h1 className="text-3xl font-semibold lg:text-5xl">Our Squad</h1>
                    <p className="mt-4 text-sm  tracking-widest text-gray-700 lg:mt-5 lg:text-xl xl:w-7/12">
                        Meet our squad that makes your digital experience better with solutions beyond technology. <br></br>
                        <br></br>
                        We admire and respect professionalism, integrity, sportsmanship, transparency and modesty. And we aspire to cultivate these qualities within the work
                        environment as we grow.
                    </p>
                    <div className="mt-16 flex gap-x-6 text-2xl">
                        {types.map((v) => (
                            <motion.span
                                className={v.value == selCat ? "underline" : "underline-link"}
                                data-cursor="-opaque"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4, ease: [0.65, 0.05, 0.36, 1] }}
                                onClick={() => setSelCat(v.value)}
                            >
                                {v.name}
                            </motion.span>
                        ))}
                    </div>
                </div>
                <motion.div className="mb-28 grid grid-cols-2 gap-y-3 gap-x-4 md:grid-cols-3 lg:mt-20 lg:gap-y-12  lg:gap-x-12 lg:px-10">
                    {members
                        .filter((f) => (selCat == -1 ? true : f.type == selCat))
                        .map((member, index) => (
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
            <motion.div data-cursor-text="click" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: [0.65, 0.05, 0.36, 1] }}>
                <motion.div
                    className="relative aspect-square object-cover"
                    style={{
                        backgroundColor: member.bgColor || cardColors[index % cardColors.length],
                    }}
                    transition={{ duration: 1 }}
                >
                    <motion.img src={member.img} className=" w-full" />
                </motion.div>
                <div className="">
                    <h3 className="mt-1 text-base font-bold uppercase lg:mt-4 lg:text-3xl">
                        {member.firstName} {member.lastName}
                    </h3>

                    <h5 className=" text-sm text-gray-700 lg:text-xl">{member.role.text}</h5>
                </div>
            </motion.div>
        </Link>
    );
};

export default index;
