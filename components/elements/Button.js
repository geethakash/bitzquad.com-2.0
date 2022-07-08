import { motion } from 'framer-motion';
function Button({ children, className }) {
  return (
    <motion.div
      className="p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.button className={className}>{children}</motion.button>
    </motion.div>
  );
}

export default Button;
