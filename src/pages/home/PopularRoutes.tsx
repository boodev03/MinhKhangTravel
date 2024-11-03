import HeadingSection from "@/components/HeadingSection";
import { Button } from "@/components/ui/button";
import { CarType } from "@/types/car-rental";
import { motion, useInView } from "framer-motion";
import { Clock, Info, MapPin } from "lucide-react";
import React, { useRef, useState } from "react";
import PopularRoutesModal, {
  PopularRoutesModalFormData,
} from "./PopularRoutesModal";
import { popularRouteCards } from "@/data/popularRoutes";

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

const PopularRouteCard: React.FC<PopularRouteCardProps> = ({
  cardProps,
  index,
  onClick,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden 
        shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-300"
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }
          }
          transition={{
            type: "tween",
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-5 transition-opacity duration-300 z-10"></div>
          <img
            className="w-full h-auto lg:h-48 object-cover transition-transform duration-500 
              group-hover:scale-105 group-hover:brightness-95"
            src={cardProps.endPointImage}
            alt={cardProps.endPoint}
          />
        </motion.div>
        <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md z-20">
          <MapPin className="text-gray-700 opacity-70" size={20} />
        </div>
      </div>

      <motion.div
        className="p-5 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: index * 0.1 + 0.2,
        }}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-1">
            {cardProps.startPoint} → {cardProps.endPoint}
          </h3>
          <p className="text-gray-500 text-sm flex items-center">
            <Clock className="mr-2 text-gray-400" size={16} />
            {cardProps.distance} km | {cardProps.travelTime} phút di chuyển
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
            Các loại xe
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {cardProps.carsType.map((car, carIndex) => (
              <motion.button
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.1 + carIndex * 0.1 + 0.4,
                        },
                      }
                    : { opacity: 0, y: 20 }
                }
                className={`
                  p-2 rounded-lg border transition-all duration-300
                  bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg
                  text-xs font-medium
                `}
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
        </div>

        <motion.button
          onClick={() => onClick(cardProps)}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1 + 0.6,
                  },
                }
              : { opacity: 0, y: 20 }
          }
          className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium uppercase tracking-wider
            transition-all duration-300 
            hover:bg-gray-800 hover:shadow-lg hover:opacity-90
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

  const onOpenModal = (card: CardItemProps, selectedCarType?: CarType) => {
    setIsModalOpen(true);
    setModalDefaultValues({
      startPoint: card.startPoint,
      endPoint: card.endPoint,
      carType: selectedCarType?.name || "",
      phone: "",
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
            variant="outline"
            className="h-[50px] min-w-[280px] max-w-[100%] text-lg font-bold border border-slate-300 text-black bg-transparent transition-all duration-300 ease-in-out shadow-md rounded-lg flex items-center justify-center px-4 hover:bg-black hover:text-white hover:shadow-lg"
          >
            Tìm tuyến du lịch
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
