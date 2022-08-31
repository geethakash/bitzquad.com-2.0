import Head from "next/head";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// local imports

import { Collaborate, CustomerFeedback, Landing, LayoutMain, Loader, Testimonials, Services, OurPartners, ProjectSection } from "../components";
import Meta from "../components/defaults/Meta";

export default function Home() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading && (
                <div>
                    <Loader setLoading={setLoading} />
                </div>
            )}
            <LayoutMain>
                <Head>
                    <Meta
                        title="Bitzquad | Solutions Beyond Technology | Software Company"
                        description="We are a team of thinkers, engineers, designers, and marketers who represent different cultures worldwide, working together to build better solutions
                            for a better world.  We strive to provide sustaining digital solutions in Information Systems, Business Process Re-engineering, Branding and Digital Marketing, and
                            E-Business services that serve our stakeholders' best interests."
                        keywords="Bitzquad, Solutions Beyond Technology, Software Company Information Systems, Business Process Re-engineering, Branding, Digital Marketing, E-Business services"
                        url={`${router.basePath}/${router.asPath}`}
                        imagefb="/logo-dark.png"
                        alt="We are a team of thinkers, engineers, designers, and marketers who represent different cultures worldwide, working together to build better solutions
                    for a better world.  We strive to provide sustaining digital solutions in Information Systems, Business Process Re-engineering, Branding and Digital Marketing, and
                    E-Business services that serve our stakeholders' best interests."
                    />
                </Head>
                <div data-scroll-section>
                    <Landing loading={loading} />
                    <Services />
                    <OurPartners />
                    <ProjectSection />
                    <Testimonials />
                    <Collaborate />
                </div>
            </LayoutMain>
        </>
    );
}
