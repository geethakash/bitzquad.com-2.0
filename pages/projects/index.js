import React from "react";
import Link from "next/link";
import { LayoutSubPages } from "../../components";
import projects from "../../constants/projects";

function index() {
    return (
        <LayoutSubPages>
            <div className="bz-container relative mx-auto mt-0 h-full w-full bg-gray-50 md:bg-transparent lg:mt-44" data-scroll-section>
                <div className=" py-10 lg:px-5 lg:py-0">
                    <h1 className="text-3xl font-semibold lg:text-5xl">Projects</h1>
                    <p className="mt-4 text-sm leading-6 tracking-widest text-gray-700 lg:mt-5 lg:text-xl xl:w-7/12">
                        Potrayed here are the work that we are proud to have carried out for our invaluable customers. These projects will help you to have a better understanding
                        of what we do and how we do things.
                    </p>
                </div>
                <div className="py-10 lg:pb-52 lg:pt-32">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex w-full flex-col-reverse gap-x-3 xl:gap-x-5 2xl:gap-x-10 ${index % 2 == 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                            <div className={`mt-4 flex flex-col justify-center pb-14 md:w-1/2 lg:mt-0 lg:pb-0 ${index % 2 == 1 ? "  md:text-left" : "md:items-end md:text-right"}`}>
                                <h3 className={` text-2xl font-semibold tracking-widest first-letter:capitalize lg:text-3xl 2xl:text-4xl  `}>{project.name}</h3>
                                <p className="mt-1 text-sm text-gray-700 md:text-lg lg:mt-2 lg:w-10/12 2xl:mt-4 2xl:text-xl">{project.description}</p>
                            </div>
                            <div className="relative md:w-1/2 lg:aspect-[9/6]">
                                <Link href={`${project.link}`}>
                                    <div
                                        data-cursor-text="view"
                                        data-cursor={`${project.primaryTextColor}`}
                                        className="bottom-1/2 w-full overflow-hidden lg:absolute lg:aspect-[8/7] lg:translate-y-[50%] "
                                    >
                                        <img
                                            src={project.image}
                                            data-scroll
                                            data-scroll-speed="-2"
                                            className="top-[-100px] w-full object-cover lg:absolute lg:aspect-[4/5]"
                                            alt={project.name}
                                        />
                                        <button className={`absolute bottom-2 right-2 block px-2 py-2 lg:hidden ${project.backgroundColor} ${project.primaryTextColor} `}>
                                            view case study
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutSubPages>
    );
}

export default index;
