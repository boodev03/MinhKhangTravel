import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative banner">
      <img src="/images/banner.jpg" alt="Minh Khang Travel Banner" />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="absolute top-1/2 !-translate-y-1/2 left-20 text-center z-[99]"
      >
        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="text-white text-[50px] font-bold mix-blend-screen"
          style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)" }}
        >
          MINH KHANG TRAVEL
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="text-white text-[32px] font-semibold"
          style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)" }}
        >
          Uy tín - Chất Lượng - An toàn
        </motion.p>
      </motion.div>
    </section>
  );
}
