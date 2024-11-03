import { motion } from "framer-motion";

interface IProps {
  title: string;
  isInView: boolean;
}

export default function HeadingSection({ title, isInView }: IProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
    >
      {title}
    </motion.h1>
  );
}
