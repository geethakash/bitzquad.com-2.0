import { motion } from 'framer-motion';
function Button({ children, className }) {
  return (
    <motion.div className="p-5">
      <motion.button className={className}>{children}</motion.button>
    </motion.div>
  );
}

export default Button;
