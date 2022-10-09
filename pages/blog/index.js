import React from "react";
import Link from "next/link";
import { LayoutSubPages } from "../../components";
import Meta from "../../components/defaults/Meta";
import { useRouter } from "next/router";

const blogs = [
  {
    title: "Things You must know about Tailwind CSS",
    utitle: "things-you-must-know-about-tailwind-css",
    mainImg: "https://i.postimg.cc/Z5sBkW28/image.png",
    coverImg: "https://i.postimg.cc/Z5sBkW28/image.png",
    category: "Design Ideas",
    readingDuration: "10min reading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dapibus dolor. Suspendisse sodales a lectus in cursus. In scelerisque, dolor ut venenatis feugia...",
    writer: {
      name: "Akash Geethanajna",
      avatar: "/assets/img/squad/akash.webp",
    },
    publishDate: Date.now(),
  },
  {
    title: "Why You should try Mongo DB",
    utitle: "why-you-should-try-mongo-db",
    mainImg: "https://i.postimg.cc/d0vngyKW/image.png",
    coverImg: "https://i.postimg.cc/d0vngyKW/image.png",
    category: "Design Ideas",
    readingDuration: "3min reading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dapibus dolor. Suspendisse sodales a lectus in cursus. In scelerisque, dolor ut venenatis feugia...",
    writer: {
      name: "Hasindu Lanka",
      avatar: "/assets/img/squad/hasindu.webp",
    },
    publishDate: Date.now(),
  },
  {
    title: "Coding Best Practices",
    utitle: "coding-best-practices",
    mainImg: "https://i.postimg.cc/6qnTnT1Z/image.png",
    coverImg: "https://i.postimg.cc/6qnTnT1Z/image.png",
    category: "Design Ideas",
    readingDuration: "3min reading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dapibus dolor. Suspendisse sodales a lectus in cursus. In scelerisque, dolor ut venenatis feugia...",
    writer: {
      name: "Kesara Karannagoda",
      avatar: "/assets/img/squad/kesara.webp",
    },
    publishDate: Date.now(),
  },
  {
    title: "Cloudflare Workers Top Secrets",
    utitle: "clodflare-workers",
    mainImg: "https://i.postimg.cc/hPv5Dx6h/image.png",
    coverImg: "https://i.postimg.cc/hPv5Dx6h/image.png",
    category: "Design Ideas",
    readingDuration: "3min reading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dapibus dolor. Suspendisse sodales a lectus in cursus. In scelerisque, dolor ut venenatis feugia...",
    writer: {
      name: "Harindu Wijeshinghe",
      avatar: "/assets/img/squad/harindu.webp",
    },
    publishDate: Date.now(),
  },
  {
    title: "How Serverless improve your business",
    utitle: "serverless-business",
    mainImg: "https://i.postimg.cc/MGYkLBv5/image.png",
    coverImg: "https://i.postimg.cc/MGYkLBv5/image.png",
    category: "Design Ideas",
    readingDuration: "3min reading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dapibus dolor. Suspendisse sodales a lectus in cursus. In scelerisque, dolor ut venenatis feugia...",
    writer: {
      name: "Hasindu Lanka",
      avatar: "/assets/img/squad/hasindu.webp",
    },
    publishDate: Date.now(),
  },
];

function Index() {
  const router = useRouter();
  return (
    <LayoutSubPages>
      <Meta
        title="Bitzquad | Blog"
        description="We are a booming start-up in the tech ecosystem, based in Sri Lanka, focusing on providing diverse solutions in INFORMATION SYSTEMS, BUSINESS PROCESS
                RE-ENGINEERING, BRANDING AND DIGITAL MARKETING and E-BUSINESS services in both local and international markets. Our passionate and competent team is keen to bring futuristic and pragmatic solutions that transcend your expectations. We believe our purpose is to upscale
                the value of ideas of our clients and prospects."
        keywords="Blog Bitzquad, Bitzquad, Solutions Beyond Technology, Software Company, Information Systems, Business Process Re-engineering, Branding, Digital Marketing, E-Business services"
        url={`${process.env.NEXT_PUBLIC_API_URL}/${router.asPath}`}
        imagefb="/logo-dark.webp"
        alt="We are a booming start-up in the tech ecosystem, based in Sri Lanka, focusing on providing diverse solutions in information systems, business process
                re-engineering, Branding and Digital Marketing and E-Business services in both local and international markets. Our passionate and competent team is keen to bring futuristic and pragmatic solutions that transcend your expectations. We believe our purpose is to upscale
                the value of ideas of our clients and prospects."
      />
      <div
        className="bz-container relative mx-auto mt-0 h-full w-full bg-gray-50 font-['Raleway'] md:bg-transparent lg:mt-44"
        data-scroll-section
      >
        <div className=" py-10 px-5 lg:py-0">
          <h1 className="text-3xl font-semibold uppercase lg:text-5xl">Blog</h1>
          <p className="mt-4 text-sm  font-semibold tracking-widest text-gray-700 lg:mt-5 lg:text-xl xl:w-10/12">
            We are a booming start-up in the tech ecosystem, based in Sri Lanka,
            focusing on providing diverse solutions in information systems.
          </p>
        </div>
        <div className=" mb-20 grid grid-cols-1 gap-y-16 gap-x-10 pt-10 md:grid-cols-2 lg:pt-20 xl:grid-cols-3 2xl:px-20">
          {blogs.slice(0, 1).map((blog, index) => (
            <>
              <Link href={`/blog/${blog.utitle}`}>
                <div key={index} className="blog_card_large group">
                  <div className="blog_card_large_img">
                    <img src={blog.mainImg} alt={blog.title} className="" />
                  </div>
                  <div className="blog_card_large_content">
                    <div className="sub_details">
                      <div className="category">{blog.category}</div>
                      <div className="duration">{blog.readingDuration}</div>
                    </div>

                    <h4 className="title">{blog.title}</h4>
                    <p className="paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce et dapibus dolor. Suspendisse sodales a lectus in
                      cursus. In scelerisque, dolor ut venenatis feugiat, dui
                      quam dictum libero, sit amet semper neque lacus vila nolan
                      homaltm...
                    </p>
                    <div className="writer">
                      <div className="image">
                        <img src={blog.writer.avatar} alt={blog.writer.name} />
                      </div>
                      <div>
                        <span className="name">{blog.writer.name}</span>
                        <span className="publish_date">
                          {new Date(blog.publishDate).toDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={`/blog/${blog.utitle}`}>
                <div key={index} className="blog_card group lg:hidden">
                  <div className="blog_card_image">
                    <img src={blog.mainImg} alt={blog.title} />
                    <div className="duration">{blog.readingDuration}</div>
                  </div>
                  <div className="blog_card_content">
                    <h4 className="title" title={blog.title}>
                      {blog.title}
                    </h4>
                    <p className="paragraph">{blog.content}</p>
                    <div className="writer">
                      <div className="image">
                        <img src={blog.writer.avatar} alt={blog.writer.name} />
                      </div>
                      <div>
                        <span className="name">{blog.writer.name}</span>
                        <span className="publish_date">
                          {new Date(blog.publishDate).toDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
          {blogs.slice(1).map((blog, index) => (
            <Link key={index} href={`/blog/${blog.utitle}`}>
              <div key={index} className="blog_card group">
                <div className="blog_card_image">
                  <img src={blog.mainImg} alt={blog.title} />
                  <div className="duration">{blog.readingDuration}</div>
                </div>
                <div className="blog_card_content">
                  <h4 className="title" title={blog.title}>
                    {blog.title}
                  </h4>
                  <p className="paragraph">{blog.content}</p>
                  <div className="writer">
                    <div className="image">
                      <img src={blog.writer.avatar} alt={blog.writer.name} />
                    </div>
                    <div>
                      <span className="name">{blog.writer.name}</span>
                      <span className="publish_date">
                        {new Date(blog.publishDate).toDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </LayoutSubPages>
  );
}

export default Index;
