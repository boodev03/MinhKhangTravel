import { CarType } from "@/types/car-rental";
import { motion, useInView } from "framer-motion";
import { Clock, Info, MapPin } from "lucide-react";
import { useRef } from "react";
import { CardItemProps } from "./PopularRoutes";

interface PopularRouteCardProps {
  cardProps: CardItemProps;
  index: number;
  onClick: (cardProps: CardItemProps, selectedCarType?: CarType) => void;
}
const PopularRouteCard = ({
  cardProps,
  index,
  onClick,
}: PopularRouteCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      rotateY: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
        delay: 0.1,
      },
    },
  };

  // Staggered children animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: index * 0.15 + 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Image hover animation
  const imageVariants = {
    rest: { scale: 1, filter: "brightness(100%)" },
    hover: {
      scale: 1.05,
      filter: "brightness(105%)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{ y: -8 }}
        className="hidden xs:block group relative bg-white rounded-2xl border border-gray-200 overflow-hidden 
          shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-gray-300"
      >
        <motion.div
          className="relative overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div variants={imageVariants}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
            <img
              className="w-full h-auto lg:h-48 aspect-video object-cover"
              src={cardProps.endPointImage}
              alt={cardProps.endPoint}
            />
          </motion.div>
          <motion.div
            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-20"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <MapPin className="text-gray-700" size={20} />
          </motion.div>
        </motion.div>

        <motion.div
          className="p-5 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-1 line-clamp-2 h-[56px]">
              {cardProps.startPoint} → {cardProps.endPoint}
            </h3>
            <p className="text-gray-500 text-sm flex items-center">
              <Clock className="mr-2 text-gray-400" size={16} />
              {cardProps.distance} km | {cardProps.travelTime} giờ di chuyển
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
              Các loại xe
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              {cardProps.carsType.map((car) => (
                <motion.button
                  key={car.id}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgb(249, 250, 251)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="p-2 rounded-lg border bg-white border-gray-200 text-gray-600 
                    hover:border-gray-400 hover:shadow-md text-xs font-medium transition-colors duration-300"
                  onClick={() => onClick(cardProps, car)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-grow text-center">{car.name}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgb(17, 24, 39)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(cardProps)}
            className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium 
              uppercase tracking-wider transition-all duration-300 hover:shadow-xl
              border border-transparent flex items-center justify-center"
          >
            <Info className="mr-2" size={16} />
            Đặt Chuyến Đi
          </motion.button>
        </motion.div>
      </motion.div>

      <div
        className="block xs:hidden group relative bg-white rounded-2xl border border-gray-200 overflow-hidden 
          shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-gray-300"
      >
        <div className="relative overflow-hidden">
          <div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
            <img
              className="w-full h-auto lg:h-48 aspect-video object-cover"
              src={cardProps.endPointImage}
              alt={cardProps.endPoint}
            />
          </div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-20">
            <MapPin className="text-gray-700" size={20} />
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-1 line-clamp-2 h-[56px]">
              {cardProps.startPoint} → {cardProps.endPoint}
            </h3>
            <p className="text-gray-500 text-sm flex items-center">
              <Clock className="mr-2 text-gray-400" size={16} />
              {cardProps.distance} km | {cardProps.travelTime} giờ di chuyển
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
              Các loại xe
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              {cardProps.carsType.map((car) => (
                <button
                  key={car.id}
                  className="p-2 rounded-lg border bg-white border-gray-200 text-gray-600 
                    hover:border-gray-400 hover:shadow-md text-xs font-medium transition-colors duration-300"
                  onClick={() => onClick(cardProps, car)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-grow text-center">{car.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => onClick(cardProps)}
            className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium 
              uppercase tracking-wider transition-all duration-300 hover:shadow-xl
              border border-transparent flex items-center justify-center"
          >
            <Info className="mr-2" size={16} />
            Đặt Chuyến Đi
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularRouteCard;
