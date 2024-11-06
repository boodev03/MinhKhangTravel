import HeadingSection from "@/components/HeadingSection";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { popularRouteCards } from "@/data/popularRoutes";
import { CarType } from "@/types/car-rental";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import PopularRouteCard from "./PopularRouteCard";
import PopularRoutesModal, {
  PopularRoutesModalFormData,
} from "./PopularRoutesModal";

export interface CardItemProps {
  startPoint: string;
  endPoint: string;
  endPointImage: string;
  carsType: CarType[];
  distance: number;
  travelTime: string;
}

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
        <div className="hidden xs:grid xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {popularRouteCards.map((card, index) => (
            <PopularRouteCard
              key={index}
              cardProps={card}
              index={index}
              onClick={onOpenModal}
            />
          ))}
        </div>

        <ScrollArea className="xs:hidden h-[800px]">
          <div className="grid grid-cols-1 gap-6">
            {popularRouteCards.map((card, index) => (
              <PopularRouteCard
                key={index}
                cardProps={card}
                index={index}
                onClick={onOpenModal}
              />
            ))}
          </div>
        </ScrollArea>

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
