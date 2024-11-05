import { useState } from "react";
import { CarDetails } from "../../data/CarDetails";
import { carsType } from "@/data/carType";
import { AnimatePresence, motion } from "framer-motion";
import RentCarModal from "../home/RentCarModal";

const CarDetail = CarDetails.find((CarDetail) => CarDetail.id === 3);
const car = carsType.find((cartype) => cartype.id === 3);

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

export default function Car16() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="m-4 p-6 md:px-36">
      {/* Title */}
      <div className="max-w-[100%]">
        <h3 className="text-xl md:text-2xl font-bold uppercase  text-center md:text-left mb-3">
          Dịch vụ gọi {CarDetail?.name}
        </h3>
      </div>
      {/* Introduce */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          {CarDetail?.introduction.map((para, index) => (
            <p
              key={index}
              className="text-gray-900 italic md:text-lg text-justify mb-2"
            >
              {para}
            </p>
          ))}
        </div>
        <div>
          {car && (
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

                  <motion.button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className={`
                  w-full py-3 rounded-lg 
                  transition-all duration-300
                  bg-gray-900 text-white
                `}
                  >
                    Thuê Xe Ngay
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="md:max-w-[75%] mb-12">
        {CarDetail?.contents.map((content, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-center md:text-left mb-3">
              {content.title}
            </h3>
            <p className="text-gray-900 italic md:text-lg text-justify mb-2">
              {content.description}
            </p>
          </div>
        ))}
      </div>
      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-4 mb-12">
        {CarDetail?.images.map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg "
          >
            <img
              src={src}
              alt={`Car ${index + 1}`}
              className="h-full w-auto transition-transform duration-500 transform group-hover:scale-110 "
            />
          </div>
        ))}
      </div>
      {/* Question */}
      <div className="md:max-w-[75%] mx-auto mb-12">
        <h3 className="text-xl md:text-2xl font-bold uppercase text-center mb-3">
          {" "}
          Một số câu hỏi thường gặp
        </h3>
        {CarDetail?.questions.map((question, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
          >
            <p className="text-lg font-semibold italic mb-2">
              {question.question}
            </p>
            <p className="italic text-justify text-gray-600">
              Trả lời: {question.answer}
            </p>
          </div>
        ))} 
      </div>

      {car && (
        <RentCarModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedCar={car}
        />
      )}
    </div>
  );
}
