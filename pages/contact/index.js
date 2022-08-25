import React from "react";
import Link from "next/link";
import { LayoutSubPages } from "../../components";

import { MailIcon, PhoneIcon, LocationMarkerIcon, ArrowRightIcon } from "@heroicons/react/outline";

import { ContactBg, ContactBgSm } from "../../constants/images";

function index() {
    return (
        <LayoutSubPages>
            <div data-scroll-section>
                <img src={ContactBgSm.src} className="absolute left-0 right-0 block w-full -translate-y-28 md:hidden" />
                <div className=" mt-0 bg-transparent md:bg-gray-100 lg:mt-44">
                    <div className="bz-container relative mx-auto mt-0 h-auto w-full max-w-7xl py-8 md:py-16 lg:py-28 ">
                        <div className=" py-10 lg:py-0">
                            <h1 className="text-3xl font-semibold uppercase lg:text-5xl">CONTACT US</h1>
                            <p className="mt-4 text-sm font-semibold leading-6 tracking-widest text-gray-700 lg:mt-5 lg:text-xl xl:w-8/12">
                                Here you are!<br></br>
                                It was well worth the wait. Let&lsquo;s get started.
                                <br></br>
                                <br></br>
                                Want to inquire about your new project or get to know us better?<br></br>
                                Contact us directly or write to us.
                            </p>
                            <div className="mt-3 hidden flex-row flex-wrap gap-x-7  gap-y-4 px-14 text-center text-lg font-bold text-main-900 sm:w-10/12 sm:gap-y-2.5  sm:px-0 md:flex">
                                <a href="https://www.facebook.com/bitzquad">Facebook</a>
                                <a href="https://twitter.com/Bitzquad">Twitter</a>
                                <a href="https://www.instagram.com/bitzquad/">Instagram</a>
                                <a href="https://www.linkedin.com/company/bitzquad/">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bz-container relative mt-0 mb-0 max-w-5xl translate-y-0 bg-transparent px-0 shadow-none shadow-gray-200 md:bg-white md:shadow-xl lg:mb-10 lg:-translate-y-10">
                    <img src={ContactBg.src} className="hidden w-full md:block" />
                    <div className="relative top-0 left-0 right-0 bottom-0 px-5 py-10 md:absolute md:px-10">
                        <div className="flex h-full flex-row">
                            <div className="w-full p-0 sm:w-1/2 md:pr-8">
                                <div className="flex flex-col">
                                    <h1 className="text-xl font-semibold uppercase lg:text-3xl">Get In Touch</h1>
                                    <input
                                        className="mt-5 w-full rounded-none border border-gray-400 bg-gray-100 px-5 py-3 text-base leading-6 placeholder-gray-500 focus:border-gray-500 focus:placeholder-gray-400 focus:outline-none"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        className="mt-5 w-full rounded-none border border-gray-400 bg-gray-100 px-5 py-3 text-base leading-6 placeholder-gray-500 focus:border-gray-500 focus:placeholder-gray-400 focus:outline-none"
                                        type="text"
                                        placeholder="Your Email Address"
                                    />
                                    <textarea
                                        className="mt-5 w-full rounded-none border border-gray-400 bg-gray-100 px-5 py-3 text-base leading-6 placeholder-gray-500 focus:border-gray-500 focus:placeholder-gray-400 focus:outline-none"
                                        placeholder="Message"
                                        rows={7}
                                    />
                                    <div className="flex w-full items-center justify-center">
                                        <button className="focus:shadow-outline mt-4 flex flex-row rounded-full bg-purple-500 px-5 py-3 text-base leading-6 text-white hover:bg-purple-600 focus:outline-none">
                                            Send Message <ArrowRightIcon className="ml-2 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-0 hidden w-full border-l border-gray-400 sm:w-1/2 md:block lg:mb-56">
                                <div className="flex h-full flex-col justify-center gap-y-4 pl-8">
                                    <div className="felx-col flex ">
                                        <PhoneIcon className="mr-2 h-5 w-5  text-purple-600" />
                                        <a href="tel:1234567890">1234567890</a>
                                    </div>
                                    <div className="felx-col flex ">
                                        <MailIcon className="mr-2 h-5 w-5  text-purple-600" />
                                        <a href="mailto:hello@bitzquad.com">hello@bitzquad.com</a>
                                    </div>
                                    <div className="felx-col flex ">
                                        <LocationMarkerIcon className="mr-2 h-5 w-5 text-purple-600" />
                                        <a href="https://www.google.com/maps/place/BZ+Consulting/@-6.2147,106.845,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f0f8f8f8f8f8f:0x2e69f0f8f8f8f8f8f!8m2!3d-6.2147!4d106.847">
                                            11AS1223, Colombo 07, Sri Lanka
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutSubPages>
    );
}

export default index;
