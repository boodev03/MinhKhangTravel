import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Info } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

interface CarRentalType {
  type: string;
  price: number;
}

interface Destination {
  name: string;
  image: string;
  description?: string;
}

interface RouteInfo {
  start: string;
  end: string;
}

interface PopularRouteCardProps {
  destination: Destination;
  route: RouteInfo;
  distance: number;
  travelTime: number;
  CarRentalTypes: CarRentalType[];
  index: number;
}

const PopularRouteCard: React.FC<PopularRouteCardProps> = ({
  destination,
  route,
  distance,
  travelTime,
  CarRentalTypes,
  index,
}) => {
  const [selectedCar, setSelectedCar] = useState<CarRentalType | null>(null);
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
      {/* Image Section */}
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
            className="w-full h-48 object-cover transition-transform duration-500 
              group-hover:scale-105 group-hover:brightness-95"
            src={destination.image}
            alt={destination.name}
          />
        </motion.div>
        <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md z-20">
          <MapPin className="text-gray-700 opacity-70" size={20} />
        </div>
      </div>

      {/* Card Content */}
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
            {route.start} → {route.end}
          </h3>
          <p className="text-gray-500 text-sm flex items-center">
            <Clock className="mr-2 text-gray-400" size={16} />
            {distance} km | {travelTime} phút di chuyển
          </p>
        </div>

        {/* Car Rental Types */}
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
            Các loại xe
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {CarRentalTypes.map((car, carIndex) => (
              <motion.button
                key={car.type}
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
                  ${
                    selectedCar?.type === car.type
                      ? "bg-gray-100 border-gray-300 text-gray-900"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg"
                  }
                  text-xs font-medium
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCar(car)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex-grow text-left">{car.type}</div>
                  <div className="font-semibold text-gray-800">
                    {car.price.toLocaleString()} ₫
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Info className="mr-2" size={16} />
          Đặt Chuyến Đi
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default function PopularRoutes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="md:container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 tracking-tight"
        >
          Các Tuyến Du Lịnh Phổ Biến
        </motion.h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <PopularRouteCard
                key={index}
                index={index}
                destination={{
                  name: "Đà Lạt",
                  image:
                    "https://dalat.tours/vi/wp-content/uploads/2019/01/dalat_tours3.jpg",
                }}
                route={{ start: "Thành Phố Hồ Chí Minh", end: "Đà Lạt" }}
                distance={300}
                travelTime={5}
                CarRentalTypes={[
                  { type: "Xe 4 chỗ", price: 1200000 },
                  { type: "Xe 7 chỗ", price: 1600000 },
                  { type: "Xe 16 chỗ", price: 2000000 },
                  { type: "Xe 29 chỗ", price: 2500000 },
                ]}
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
    </section>
  );
}
