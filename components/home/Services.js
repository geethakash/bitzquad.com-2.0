import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServicesImg } from "../../constants/images";

function Services() {
    return (
        <div className="services_" id="services">
            <div className="services__bgwrapper">
                <div className="services__content_wrapper mt-0">
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
                        <span>Explore Our</span>
                        <br />
                        SERVICES
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
                        className="services__content"
                    >
                        <div className="services__content_grid">
                            <div className="card">
                                <h4 className="card_title">Information Systems</h4>
                                <p className="card_text">Upgrade your processes with the best technology that helps your business grow.</p>
                                <button className="card_button">read more</button>
                            </div>
                            <div className="card">
                                <h4 className="card_title">Business Process Reengineering</h4>
                                <p className="card_text">Processes that are simple and optimized are preferable to those that are convoluted and complex.</p>
                                <button className="card_button">read more</button>
                            </div>
                            <div className="card">
                                <h4 className="card_title">E-Business</h4>
                                <p className="card_text">Utilize digital information and advanced communication technologies to streamline different business processes.</p>
                                <button className="card_button">read more</button>
                            </div>
                            <div className="card">
                                <h4 className="card_title">Brand Designing & Digital Marketing</h4>
                                <p className="card_text">The aesthetic representation of a brand&apos;s positioning and personality is found in its visual identity.</p>
                                <button className="card_button">read more</button>
                            </div>
                        </div>
                        <div className="services__content_image">
                            <motion.img src={ServicesImg.src} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Services;
