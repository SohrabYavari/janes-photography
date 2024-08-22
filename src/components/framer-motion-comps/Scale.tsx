import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Scale = ({ children }: Props) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{ duration: 1, }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Scale;
