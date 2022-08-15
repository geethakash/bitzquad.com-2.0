import React from "react";
import Link from "next/link";
import { LayoutMain } from "../../components";
import about from "../../constants/about";

function index() {
    return (
        <LayoutMain>
            <div className="bz-container relative mx-auto mt-0 h-full w-full bg-gray-50 md:bg-transparent lg:mt-52" data-scroll-section>
                <div className=" py-10 lg:py-0">
                    <h1 className="text-3xl font-semibold uppercase lg:text-5xl">About Us</h1>
                    <p className="mt-4 text-sm font-semibold leading-6 tracking-widest text-gray-500 lg:mt-5 lg:text-xl xl:w-7/12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur
                    </p>
                </div>
                <div className="py-10 lg:pb-52 lg:pt-32">
                    {about.map((project, index) => (
                        <div key={index} className={`mb-10 flex  w-full flex-col-reverse  lg:mb-24 ${index % 2 == 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                            <div
                                style={{
                                    background: "rgb(249, 250, 251)",
                                    background: "linear-gradient(90deg, rgba(249, 250, 251,1) 0%, rgba(249, 250, 251,1) 50%, rgba(255,255,255,0) 100%)",
                                }}
                                className={`relative z-10 flex h-80 flex-col pt-4 pb-14 md:z-auto md:h-auto  md:w-1/2 md:bg-none lg:mt-0 lg:pb-0  ${
                                    index % 2 == 1 ? "ml-0 md:ml-10" : ""
                                }`}
                            >
                                <h3 className=" mb-2 text-xl font-semibold tracking-widest first-letter:capitalize lg:text-2xl 2xl:text-3xl ">{project.t1}</h3>
                                <h3 className=" text-2xl font-semibold tracking-widest first-letter:capitalize lg:text-3xl 2xl:text-4xl  ">{project.t2}</h3>
                                <p className="mt-1 mr-auto text-sm md:mr-4 md:text-lg lg:mt-2 lg:w-10/12 2xl:mt-4 2xl:text-xl">{project.description}</p>

                                <img src={project.imgtxt} className="absolute bottom-4 w-8/12  md:left-8 md:w-auto md:scale-x-110" alt={project.name} />
                            </div>
                            <div className="relative md:w-1/2 lg:aspect-[9/6]">
                                <div className="bottom-1/2 w-full overflow-hidden md:h-full lg:aspect-[8/7] lg:h-auto  ">
                                    <img
                                        src={project.image}
                                        className="absolute left-auto right-0 h-80  w-7/12 object-cover sm:w-full md:relative md:h-full lg:aspect-[4/5] lg:h-auto"
                                        alt={project.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutMain>
    );
}

export default index;
