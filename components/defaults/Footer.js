import React from "react";
import { LogoDark, Logo } from "../../constants/images";
import Link from "next/link";

function Footer() {
    return (
        <footer className="relative flex flex-col bg-gray-100" data-scroll-section>
            <div className="flex flex-col items-center justify-center py-14 pt-6 sm:flex-row sm:py-28">
                <div className="w-full sm:w-1/2">
                    <div className="felx relative mr-0 ml-auto w-full flex-row justify-center border-r border-gray-700 py-7 sm:w-9/12 lg:w-8/12">
                        <img className="w-full px-20 pb-6 sm:w-10/12  sm:px-0 sm:pb-0" src={LogoDark.src} alt="bz-logo" />

                        <div className="mt-3 flex flex-row flex-wrap justify-evenly gap-x-7 gap-y-4 px-14 text-center text-lg font-bold text-main-900 sm:w-10/12 sm:justify-between sm:gap-y-2.5 sm:px-0">
                            <a href="https://www.facebook.com/bitzquad/" className="w-28 sm:w-auto">
                                Facebook
                            </a>
                            <a href="https://twitter.com/Bitzquad" className="w-28 sm:w-auto">
                                Twitter
                            </a>
                            <a href="https://www.instagram.com/bitzquad/" className="w-28 sm:w-auto">
                                Instagram
                            </a>
                            <a href="https://www.linkedin.com/company/bitzquad/" className="w-28 sm:w-auto">
                                LinkedIn
                            </a>
                        </div>
                        <div className="mt-8 flex flex-row flex-wrap justify-evenly gap-x-7 gap-y-2.5 px-8 text-lg font-bold text-main-900 sm:mt-3 sm:justify-start sm:px-0">
                            <a href="mailto:hello@bitzquad.com">hello@bitzquad.com</a>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="relative ml-0 mr-auto flex w-full flex-row justify-evenly sm:w-9/12 lg:w-8/12">
                        <div className="mt-3 flex  flex-col flex-wrap gap-x-7 gap-y-2 text-center text-xl  sm:text-left lg:text-2xl">
                            <Link href="#services">Services</Link>
                            <Link href="/about">About</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/squad">Squad</Link>
                        </div>
                        <div className="mt-3 flex flex-col flex-wrap gap-x-7 gap-y-2 text-center text-xl sm:text-left lg:text-2xl">
                            <Link href="#">Careers</Link>
                            <Link href="#">Our Partners</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="#">Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border-t border-gray-400 py-5">
                <p className="text-center text-gray-500">
                    © {new Date().getFullYear()}{" "}
                    <a href="https://bitzquad.com" className="text-sm text-blue-600">
                        Bitzquad
                    </a>
                    , All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
