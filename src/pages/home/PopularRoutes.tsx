import HeadingSection from "@/components/HeadingSection";
import { Button } from "@/components/ui/button";
import { popularRouteCards } from "@/data/popularRoutes";
import { CarType } from "@/types/car-rental";
import { motion, useInView } from "framer-motion";
import { Clock, Info, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import PopularRoutesModal, {
  PopularRoutesModalFormData,
} from "./PopularRoutesModal";

export interface CardItemProps {
  startPoint: string;
  endPoint: string;
  endPointImage: string;
  carsType: CarType[];
  distance: number;
  travelTime: number;
}

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

  // Enhanced card animation variants
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
        delay: index * 0.15,
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
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden 
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
            className="w-full h-auto lg:h-48 object-cover"
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
            {cardProps.distance} km | {cardProps.travelTime} phút di chuyển
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
            Các loại xe
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                  <div className="flex-grow text-left">{car.name}</div>
                  <div className="font-semibold text-gray-800">
                    {car.price.toLocaleString()} ₫
                  </div>
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
  );
};

export default function PopularRoutes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultValues, setModalDefaultValues] = useState<
    PopularRoutesModalFormData | undefined
  >(undefined);

  const onOpenModal = (card?: CardItemProps, selectedCarType?: CarType) => {
    setIsModalOpen(true);
    setModalDefaultValues({
      startPoint: card?.startPoint || "",
      endPoint: card?.endPoint || "",
      carType: selectedCarType?.name || "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div ref={ref} className="md:container mx-auto px-4">
        <HeadingSection
          isInView={isInView}
          title="Các tuyến du lịch phổ biến"
        />
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {popularRouteCards.map((card, index) => (
            <PopularRouteCard
              key={index}
              cardProps={card}
              index={index}
              onClick={onOpenModal}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            onClick={() => onOpenModal()}
            variant="outline"
            className="h-[50px] min-w-[280px] max-w-[100%] text-lg font-bold border border-slate-300 text-black bg-transparent transition-all duration-300 ease-in-out shadow-md rounded-lg flex items-center justify-center px-4 hover:bg-black hover:text-white hover:shadow-lg"
          >
            Đặt tuyến du lịch khác
          </Button>
        </div>
      </div>
      <PopularRoutesModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        defaultValues={modalDefaultValues}
      />
    </section>
  );
}
