import { motion } from 'framer-motion';

function Button({ children, className, parentClassName }) {
  return (
    <motion.div
      className={`p-5 ${parentClassName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className={`relative overflow-hidden rounded-full border-2 border-purple-700 px-10 py-4 text-xl   ${className}`}
      >
        {/* <motion.div className="absolute bottom-0 left-0 top-0 right-0 h-full w-full bg-green-400 "></motion.div> */}
        <span>{children}</span>
      </motion.button>
    </motion.div>
  );
}

export default Button;
