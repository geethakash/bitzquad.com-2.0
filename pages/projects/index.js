import React from 'react';
import Link from 'next/link';
import { LayoutMain } from '../../components';
import projects from '../../constants/projects';

function index() {
  return (
    <LayoutMain>
      <div className="bz-container " data-scroll-section>
        <div className=" md:py-10 md:pb-32 lg:px-10 ">
          <h1 className="text-3xl font-semibold lg:text-5xl">Projects</h1>
          <p className="mt-4 text-sm font-semibold leading-6 tracking-widest text-gray-500 lg:mt-5 lg:text-xl xl:w-7/12">
            We are passionate to build new digital products for a better future
            by collaborating with new clients.
          </p>
        </div>
        <div className="pt-32 pb-52">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex w-full  gap-x-10 ${
                index % 2 == 1 ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex  w-1/2 flex-col justify-center ${
                  index % 2 == 1 ? '  text-left' : 'items-end text-right'
                }`}
              >
                <h3 className=" text-3xl font-semibold tracking-widest first-letter:capitalize">
                  {project.name}
                </h3>
                <p className="mt-4 w-10/12 text-lg">{project.description}</p>
              </div>
              <div className="relative aspect-[9/6] w-1/2">
                <Link href={`/projects/${project.name}`}>
                  <div
                    data-cursor-text="view"
                    data-cursor={`${project.primaryColor}`}
                    className="absolute bottom-1/2  aspect-[8/7] w-full translate-y-[50%] overflow-hidden "
                  >
                    <img
                      src={project.image}
                      data-scroll
                      data-scroll-speed="-2"
                      className=" absolute top-[-100px]  aspect-[4/5] w-full object-cover"
                      alt={project.name}
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutMain>
  );
}

export default index;
