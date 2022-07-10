import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// local imports

import {
  Collaborate,
  CustomerFeedback,
  Landing,
  LayoutMain,
  Loader,
  Testimonials,
  ServiceCard,
  OurTeam,
} from "../components";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <div>
          <Loader setLoading={setLoading} />
        </div>
      )}
      <LayoutMain>
        <Landing loading={loading} />
        <Testimonials />
        <Collaborate />
        <ServiceCard
          title={"Information Systems"}
          description={
            "We are passionate to build new digital products for a better future by collaborating with new clients. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you."
          }
          buttonText={"Learn More"}
          color={"green"}
        />
        <ServiceCard
          title={"Business Process Re-engineering"}
          description={
            "The practice of rethinking and redesigning the way work is done to better support an organization&quot;s mission and reduce costs."
          }
          buttonText={"Learn More"}
          color={"purple"}
        />
        <OurTeam />
      </LayoutMain>
    </>
  );
}
