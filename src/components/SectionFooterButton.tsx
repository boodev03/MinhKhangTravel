import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

interface IProps {
  onClick: () => void;
  title: string;
}

export default function SectionFooterButton({ onClick, title }: IProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const isButtonInView = useInView(buttonRef, { once: true });
  return (
    <motion.div
      ref={buttonRef}
      variants={buttonVariants}
      initial="hidden"
      animate={isButtonInView ? "visible" : "hidden"}
      className="flex justify-center mt-10"
    >
      <Button
        onClick={onClick}
        variant="outline"
        className="h-[50px] min-w-[280px] max-w-[100%] text-lg font-bold border border-slate-300 text-black bg-transparent transition-all duration-300 ease-in-out shadow-md rounded-lg flex items-center justify-center px-4 hover:bg-black hover:text-white hover:shadow-lg"
      >
        {title}
      </Button>
    </motion.div>
  );
}
