import React from "react";
import { ProjectSectionBg } from "../../constants/images";
import Button from "../elements/Button";

function ProjectSection() {
    return (
        <div className="project-section-wrapper">
            <div className="project-section-content">
                <div className="bz-container mt-0">
                    <h3>Projects</h3>
                    <p>
                        Potrayed here are the work that we are proud to have carried out for our invaluable customers. These projects will help you to have a better understanding
                        of what we do and how we do things.
                    </p>
                    <Button
                        className="focus:shadow-outline mt-4 flex flex-row rounded-full border-none bg-purple-500 px-5 py-3 text-base leading-6 tracking-wider text-white  "
                        parentClassName="px-0"
                    >
                        View Projects
                    </Button>
                </div>
            </div>
            <div className="absolute top-0 left-0 -z-10 h-full w-full   ">
                <img className="absolute z-20 h-full w-auto object-cover md:h-auto md:w-full" data-scroll data-scroll-speed="-3" src={ProjectSectionBg.src} />
            </div>
        </div>
    );
}

export default ProjectSection;
