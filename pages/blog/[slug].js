import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LayoutSubPages } from "../../components";
import Meta from "../../components/defaults/Meta";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { motion, useScroll, useSpring } from "framer-motion";
import Markdown from "markdown-to-jsx";
import Code from "../../components";

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"));
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const markDownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
    const { data: frontmatter, content } = matter(markDownWithMeta);
    const sections = extractHeadings(content);
    return {
        props: {
            frontmatter,
            content,
            slug,
            sections,
        },
    };
}

const extractHeadings = (str) => {
    const h1patten = /(## )/;
    const h2patten = /(^### )/;

    let h1 = [];
    let h2 = [];
    let obj = [];
    const strarr = str.split("\n");

    for (var i = 0; i < strarr.length; i++) {
        if (strarr[i].match(/(^## )/)) {
            h1.push({ text: strarr[i].replace("## ", ""), row: i });
        }
        if (strarr[i].match(/(^### )/)) {
            h2.push({ text: strarr[i].replace("### ", ""), row: i });
        }
    }
    obj = h1;
    for (var a = 0; a < h1.length; a++) {
        for (var b = 0; b < h2.length; b++) {
            if (a == h1.length - 1 && h1[a].row < h2[b].row) {
                if (!obj[a].subtexts) obj[a].subtexts = [h2[b]];
                else obj[a].subtexts.push(h2[b]);
            } else if (h1[a].row < h2[b].row && h1[a + 1].row > h2[b].row) {
                if (!obj[a].subtexts) obj[a].subtexts = [h2[b]];
                else obj[a].subtexts.push(h2[b]);
            }
        }
    }
    console.log("obj : ", JSON.stringify(obj));

    return obj;
    // console.log("h1 : ", h1);
    // console.log("h2 : ", h2);
};

const HeadingLink = ({ children }) => <div className="text-red-400">{children}</div>;

function PostPage({ frontmatter: meta, content, slug, sections }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 50,
        restDelta: 0.001,
    });
    const router = useRouter();
    return (
        <LayoutSubPages>
            <Meta
                title={`Bitzquad | Blog - ${meta.title}`}
                description={meta.excerpt}
                keywords="Blog Bitzquad, Bitzquad, Solutions Beyond Technology, Software Company, Information Systems, Business Process Re-engineering, Branding, Digital Marketing, E-Business services"
                url={`${process.env.NEXT_PUBLIC_API_URL}/${router.asPath}`}
                imagefb={meta.main_image}
                alt={meta.excerpt}
            />
            <div className="mx-auto w-full font-['Raleway'] lg:mt-36 2xl:mt-44 ">
                <motion.div className="progress-bar" style={{ scaleX }} />
                <div className="relative">
                    <img src={meta.cover_image} className="absolute left-0 top-0 -z-10 h-full w-full object-cover" />
                    <div className="h-full w-full  bg-black bg-opacity-70 px-5 md:px-10 lg:px-0">
                        <div className="mx-auto max-w-[1080px]  py-20 lg:w-[57%]">
                            <div className="flex flex-col gap-y-2 gap-x-7 pb-2 text-lg tracking-wider lg:flex-row lg:items-center lg:pb-0">
                                <span className=" rounded py-1 font-semibold text-gray-400 lg:bg-purple-custom lg:px-3 lg:text-gray-700">{meta.category}</span>
                                <span className=" font-semibold text-purple-custom">{meta.date}</span>
                                <span className="text-base font-semibold text-gray-300">{meta.read_duration}</span>
                            </div>
                            <h1 className="mt-2 font-semibold leading-snug text-gray-50 lg:mt-4 lg:text-5xl lg:font-bold lg:tracking-wider">{meta.title}</h1>
                            <div className="mt-3 mb-2 flex items-center gap-x-3">
                                <div className="aspect-square w-12 overflow-hidden rounded-full bg-indigo-400">
                                    <img className="h-full w-full object-cover" src={meta.writer_avatar} alt={meta.writer} />
                                </div>
                                <div>
                                    <span className="block text-sm font-semibold uppercase tracking-widest text-gray-300">{meta.writer}</span>
                                </div>
                            </div>

                            <div className="mt-10  md:block lg:w-10/12">
                                <blockquote className=" text-2xl italic text-slate-300">{meta.quote}</blockquote>
                                <div className="mx-auto mt-3 text-right text-2xl  text-gray-300">- {meta.quote_owner}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bz-container mt-0 mb-20 flex justify-center gap-x-5">
                    <article ref={ref} className=" text-[#181B3C]  lg:w-3/4">
                        <Markdown>{marked(content)}</Markdown>
                    </article>
                    <div className="hidden w-1/4 pt-16 lg:block">
                        <span className="block text-lg font-semibold uppercase">In This Article</span>
                        <div className="mt-3">
                            {sections.map((section, index) => (
                                <div key={index} className="pb-1">
                                    {console.log(section.text)}
                                    <a href={`#${section.text.replace(/\s+/g, "-").toLowerCase()}`} className="mr-1  text-base text-gray-500">
                                        {index + 1}. {section.text.split(". ")[1]}
                                    </a>

                                    {section.subtexts?.map((ssection, index1) => (
                                        <div key={index} className="ml-5">
                                            <span className="mr-1 text-lg text-gray-500">
                                                {index + 1}.{index1 + 1}.
                                            </span>
                                            {ssection.text}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutSubPages>
    );
}

const Section = ({ children, title, index }) => {
    return (
        <section className="mt-6 flex items-center justify-center">
            <div className="relative">
                <div className="sticky top-0 z-10 bg-white px-5 py-4 text-2xl font-semibold">
                    <h3 className="">
                        <span className="px-1 text-5xl font-thin">{index}.</span>
                        {title}
                    </h3>
                </div>

                <div className="section_content">{children}</div>
            </div>
        </section>
    );
};

export default PostPage;
