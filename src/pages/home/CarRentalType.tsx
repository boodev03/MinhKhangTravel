import SectionFooterButton from "@/components/SectionFooterButton";
import { carsType } from "@/data/carType";
import { CarType } from "@/types/car-rental";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import RentCarModal from "./RentCarModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
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

export default function CarRentalType(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleRentClick = (car?: CarType): void => {
    if (car) setSelectedCar(car);
    setIsModalOpen(true);
  };

  return (
    <section
      ref={ref}
      className="md:container mx-auto px-4 py-16 bg-white text-gray-900"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
      >
        Chọn dịch vụ cần thuê tại{" "}
        <span className="text-blue-600 dark:text-blue-500">
          MinhKhangTravel
        </span>{" "}
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {carsType.map((car) => (
          <motion.div
            key={car.id}
            variants={cardVariants}
            onMouseEnter={() => setHoveredCard(car.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`
              relative overflow-hidden 
              border border-gray-200 rounded-2xl 
              transition-all duration-300
              ${
                hoveredCard === car.id
                  ? "scale-105 shadow-2xl border-gray-300"
                  : "scale-100 shadow-lg"
              }
            `}
          >
            <div className="relative z-10 p-6">
              <div className="relative overflow-hidden mb-6 h-48 flex items-center justify-center">
                <AnimatePresence>
                  <motion.img
                    key={car.id}
                    src={car.image}
                    alt={car.name}
                    initial={{
                      scale: 1,
                      opacity: 0.7,
                    }}
                    animate={{
                      scale: hoveredCard === car.id ? 1.15 : 1,
                      opacity: hoveredCard === car.id ? 1 : 0.7,
                      transition: {
                        duration: 0.4,
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                      },
                    }}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>

                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {car.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`
                        ${car.accentColor} 
                        px-2 py-1 rounded-full text-xs
                        opacity-80 hover:opacity-100 transition-opacity
                      `}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="text-3xl font-bold mb-4 text-gray-800">
                  {car.price}
                  <span className="text-sm ml-1 text-gray-600">VNĐ/ngày</span>
                </div>

                <motion.button
                  onClick={() => handleRentClick(car)}
                  className={`
                    w-full py-3 rounded-lg 
                    transition-all duration-300
                    ${
                      hoveredCard === car.id
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }
                  `}
                >
                  Thuê Xe Ngay
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <SectionFooterButton onClick={handleRentClick} title="Đặt xe ngay" />

      <RentCarModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedCar={selectedCar}
      />
    </section>
  );
}
