import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// local imports
import { Landing, LayoutMain, Loader } from '../components';


export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <motion.div initial="hidden" animate="show" exit="exit">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <LayoutMain>
          <Landing />
        </LayoutMain>
      )}
    </>
  );
}
