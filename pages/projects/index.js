import React from 'react';
import Link from 'next/link';
import { LayoutMain } from '../../components';
import projects from '../../constants/projects';

function index() {
  return (
    <LayoutMain>
      <div className="bz-container " data-scroll-section>
        <div className=" py-10 pb-20 lg:px-10 ">
          <h1 className="text-3xl font-semibold lg:text-5xl">Projects</h1>
          <p className="mt-4 text-sm font-semibold leading-6 tracking-widest text-gray-500 lg:mt-5 lg:text-xl xl:w-7/12">
            We are passionate to build new digital products for a better future
            by collaborating with new clients.
          </p>
        </div>
        <div class="pt-32 pb-52">
          {projects.map((project, index) => (
            <>
              <div
                className={`flex w-full  gap-x-10 ${
                  index % 2 == 1 ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`flex  w-1/2 flex-col justify-center ${
                    index % 2 == 1 ? '  text-left' : 'items-end text-right'
                  }`}
                >
                  <h3 className=" text-3xl font-bold tracking-widest first-letter:capitalize">
                    {project.name}
                  </h3>
                  <p className="w-10/12 text-base">{project.description}</p>
                </div>
                <div className="relative aspect-[9/6] w-1/2">
                  <Link href={`/${project.name}`}>
                    <div className="absolute bottom-1/2 z-40 aspect-[8/7] w-full translate-y-[50%] overflow-hidden ">
                      <div className="relative max-h-full w-full  bg-green-400"></div>
                      <img
                        src={project.image}
                        data-scroll
                        data-scroll-speed="0.75"
                        className=" absolute top-[-100px]  aspect-[4/5] w-full object-cover"
                        alt={project.name}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </LayoutMain>
  );
}

export default index;

// <div
//               className={`${
//                 index % 2 == 0 ? '  row-span-1' : ''
//               } row-span-2 flex aspect-[5/4] flex-col items-center justify-center`}
//             >
//               <img
//                 src={project.image}
//                 className="w-full object-cover"
//                 alt={project.name}
//               />
//             </div>
//             <div
//               className={`${
//                 index % 2 == 0 ? 'row-span-1  bg-red-400' : ''
//               } flex aspect-[5/3] flex-col items-center justify-center `}
//             >
//               <h3 className="text-2xl font-bold">{project.name}</h3>
//               <p className="text-base">{project.description}</p>
//               <a href={project.link} className="text-base">
//                 <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
//                   Visit
//                 </button>
//               </a>
//             </div>
