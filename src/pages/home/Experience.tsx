import HeadingSection from "@/components/HeadingSection";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useEffect, useState, FC } from "react";

interface StatItem {
  icon: string;
  number: number;
  unit: string;
  description: string;
}

interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const Counter: FC<CounterProps> = ({ end, duration = 2, className }) => {
  const [count, setCount] = useState<number>(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={nodeRef} className={className}>
      {count.toLocaleString()}
    </span>
  );
};

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats: StatItem[] = [
    {
      icon: "/images/customer.svg",
      number: 3000,
      unit: "hành khách đã đi",
      description:
        "Minh Khang Travel phục vụ hàng ngàn lượt khách mỗi năm trên khắp cả nước.",
    },
    {
      icon: "/images/bus.svg",
      number: 12,
      unit: "năm kinh nghiệm",
      description:
        "Với hơn 12 năm kinh nghiệm, Minh Khang Travel luôn đồng hành và mang đến trải nghiệm an toàn, thoải mái.",
    },
    {
      icon: "/images/location.svg",
      number: 80,
      unit: "cung đường đến địa điểm",
      description:
        "Minh Khang Travel cung cấp dịch vụ vận chuyển đến hơn 80 tuyến đường trên toàn quốc.",
    },
  ];

  return (
    <section ref={ref} className="container mx-auto py-20">
      <HeadingSection isInView={isInView} title="Kinh nghiệm làm việc" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-5"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <img
                  src={item.icon}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  <span className="text-black dark:text-white">Hơn </span>
                  <Counter
                    end={item.number}
                    className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-white bg-clip-text text-transparent"
                  />{" "}
                  <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                    {item.unit}
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/experience.jpg" alt="Experience" />
          </div>
          {/* Decorative elements with black/white gradient */}
          <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-gray-900/10 dark:bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-gray-800/10 dark:bg-gray-100/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
