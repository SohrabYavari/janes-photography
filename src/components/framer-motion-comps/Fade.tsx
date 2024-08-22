import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Fade = ({ children }: Props) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Fade;
