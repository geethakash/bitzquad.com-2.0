import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// local imports
import { Landing, LayoutMain, Loader } from '../components';

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <div>
          <Loader setLoading={setLoading} />
        </div>
      ) : (
        <LayoutMain>
          <Landing />
        </LayoutMain>
      )}
    </>
  );
}
