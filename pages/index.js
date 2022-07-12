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
        <Landing loading={loading} />
        <Testimonials />
        <Collaborate />
        <Services />
      </LayoutMain>
    </>
  );
}
