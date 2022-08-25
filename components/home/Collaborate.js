import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CollaborateImg } from "../../constants/images";
import { Button } from "..";
import Link from "next/link";

function Collaborate() {
    return (
        <div className="collaborate_">
            <div className="collaborate__bgwrapper">
                <div className="collaborate__content_wrapper">
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
                        Collaborate with Us
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
                        className="collaborate__content"
                    >
                        <div className="collaborate__content_text">
                            <p>
                                Got an innovative idea? Need tech support to make it a reality?<br></br>We got you.<br></br>
                                <br></br>Bitzquad has a capable team passionate about developing apt and innovative digital solutions through collaborations which take you through
                                an unmatched digital journey.<br></br>Your query is one tap away.
                            </p>
                            {/* <button className="talk-btn">Let&quot;s Talk</button> */}
                            <Button className="talk-btn" parentClassName="px-0">
                                Let&apos;s Talk
                            </Button>
                        </div>
                        <div className="collaborate__content_image">
                            <motion.img src={CollaborateImg.src} layoutId="userImg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
export default Collaborate;
