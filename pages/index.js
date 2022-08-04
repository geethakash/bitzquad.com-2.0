import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// local imports

import {
  Collaborate,
  CustomerFeedback,
  Landing,
  LayoutMain,
  Loader,
  Testimonials,
  Services,
  OurPartners,
} from '../components';

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
        <div data-scroll-section>
          <Landing loading={loading} />
          <OurPartners />

          {/* <Services /> */}
          <Testimonials />
          <Collaborate />
        </div>
      </LayoutMain>
    </>
  );
}
