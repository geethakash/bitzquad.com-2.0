import React, { useEffect } from "react";
import { LogoDark, Logo } from "../../constants/images";
import { motion, AnimatePresence } from "framer-motion";
import SideMenu from "./SideMenu";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Link from "next/link";

function Navbar({ animated = false }) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const { scroll } = useLocomotiveScroll();
    useEffect(() => {
        if (!scroll) {
            return;
        }
        if (menuOpen) {
            scroll.stop();
        } else {
            scroll.start();
        }
    }, [menuOpen]);

    return (
        <>
            <motion.nav
                data-scroll-section
                initial={
                    animated
                        ? {
                              opacity: 0,
                              y: -100,
                          }
                        : {}
                }
                animate={
                    animated
                        ? {
                              opacity: 1,
                              y: 0,
                              transition: {
                                  duration: 1,
                                  delay: 2,
                                  ease: "easeInOut",
                              },
                          }
                        : {}
                }
                className="navbar"
            >
                <Link className="navbar-brand" href="/">
                    <img className="h-10" src={LogoDark.src} alt="bz-logo" />
                </Link>
                <div className="navbar-links">
                    <Link href="/about">
                        <a className="navbar-link underline-link" data-cursor="-opaque">
                            About
                        </a>
                    </Link>
                    <Link href="#services">
                        <a className="navbar-link underline-link" data-cursor="-opaque">
                            Services
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="navbar-link underline-link" data-cursor="-opaque">
                            Contact
                        </a>
                    </Link>
                    <button className="menu-button" data-cursor="-opaque" onClick={() => setMenuOpen(true)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19L3 12M3 12L10 5M3 12H21" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Menu
                    </button>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex items-center gap-x-2 font-bold text-gray-600 transition-all duration-300 hover:-translate-x-2 hover:text-black"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19L3 12M3 12L10 5M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="hidden md:block">Menu</span>
                    </button>
                </div>
            </motion.nav>
            <AnimatePresence>{menuOpen && <SideMenu MenuOpen={menuOpen} setMenuOpen={setMenuOpen} />}</AnimatePresence>
        </>
    );
}

export default Navbar;
