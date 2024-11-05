import { AutoComplete } from "@/components/AutoComplete";
import HeadingSection from "@/components/HeadingSection";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { vietNamAddressFormat } from "@/data";
import { toLowerCaseNonAccentVietnamese } from "@/helper";
import { motion, useInView } from "framer-motion";
import { Car, Info, MapPin, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import InterprivincialRentalModal from "./InterprivincialRentalModal";
import SectionFooterButton from "@/components/SectionFooterButton";

const data = [
  {
    province: "Hà Nội",
    images: "/images/province/ha-noi.jpg",
    code: "Thành phố Hà Nội",
  },
  {
    province: "Đà Nẵng",
    images: "/images/province/da-nang.jpg",
    code: "Thành phố Đà Nẵng",
  },
  {
    province: "Thừa Thiên Huế",
    images: "/images/province/thua-thien-hue.jpg",
    code: "Tỉnh Thừa Thiên Huế",
  },
  {
    province: "Tây Ninh",
    images: "/images/province/tay-ninh.jpg",
    code: "Tỉnh Tây Ninh",
  },
  {
    province: "Bình Dương",
    images: "/images/province/binh-duong.jpg",
    code: "Tỉnh Bình Dương",
  },
  {
    province: "Đồng Nai",
    images: "/images/province/dong-nai.jpg",
    code: "Tỉnh Đồng Nai",
  },
  {
    province: "Bà Rịa - Vũng Tàu",
    images: "/images/province/ba-ria-vung-tau.jpg",
    code: "Tỉnh Bà Rịa - Vũng Tàu",
  },
  {
    province: "Bến Tre",
    images: "/images/province/ben-tre.jpg",
    code: "Tỉnh Bến Tre",
  },
  {
    province: "Đồng Tháp",
    images: "/images/province/dong-thap.jpg",
    code: "Tỉnh Đồng Tháp",
  },
  {
    province: "Trà Vinh",
    images: "/images/province/tra-vinh.jpg",
    code: "Tỉnh Trà Vinh",
  },
  { 
    province: "Cà Mau",
    images: "/images/province/ca-mau.jpg",
    code: "Tỉnh Cà Mau",
  }
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function InterprovincialCarRental() {
  const [startPoints, setStartPoints] = useState(vietNamAddressFormat);
  const [endPoints, setEndPoints] = useState(vietNamAddressFormat);
  const [selectedStartPoint, setSelectedStartPoint] = useState("");
  const [selectedEndPoint, setSelectedEndPoint] = useState("");
  const [searchStartPointValue, setSearchStartPointValue] = useState("");
  const [searchEndPointValue, setSearchEndPointValue] = useState("");

  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultValues, setModalDefaultValues] = useState({
    startPoint: "",
    endPoint: "",
  });

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  const isSectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  const isFormInView = useInView(formRef, {
    once: true,
    amount: 0.1,
  });

  const isMapInView = useInView(mapRef, {
    once: true,
    amount: 0.1,
  });

  const onClick = (defaultEndpoint?: string) => {
    setIsModalOpen(true);
    setModalDefaultValues({
      startPoint: "",
      endPoint: defaultEndpoint || "",
    });
  };

  useEffect(() => {
    const filteredPoints = vietNamAddressFormat.filter((item) => {
      return toLowerCaseNonAccentVietnamese(item.label).includes(
        toLowerCaseNonAccentVietnamese(searchStartPointValue)
      );
    });
    setStartPoints(filteredPoints);
  }, [searchStartPointValue]);

  useEffect(() => {
    const filteredPoints = vietNamAddressFormat.filter((item) => {
      return toLowerCaseNonAccentVietnamese(item.label).includes(
        toLowerCaseNonAccentVietnamese(searchEndPointValue)
      );
    });
    setEndPoints(filteredPoints);
  }, [searchEndPointValue]);

  return (
    <section ref={sectionRef} className="container mx-auto py-[60px]">
      <motion.div
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        transition={{ duration: 0.6 }}
      >
        <HeadingSection isInView={isSectionInView} title="Thuê xe liên tỉnh" />

        <motion.div
          ref={formRef}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl w-full mx-auto border border-gray-300 rounded-lg p-8 space-y-8"
        >
          <p className="text-center font-medium text-lg">
            Chọn điểm đến và điểm đi của quý khách
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Tỉnh đi
              </label>
              <AutoComplete
                selectedValue={selectedStartPoint}
                onSelectedValueChange={setSelectedStartPoint}
                searchValue={searchStartPointValue}
                onSearchValueChange={setSearchStartPointValue}
                items={startPoints}
                emptyMessage="Không tìm thấy kết quả"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Tỉnh đến
              </label>
              <AutoComplete
                selectedValue={selectedEndPoint}
                onSelectedValueChange={setSelectedEndPoint}
                searchValue={searchEndPointValue}
                onSearchValueChange={setSearchEndPointValue}
                items={endPoints}
                emptyMessage="Không tìm thấy kết quả"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Số điện thoại liên hệ
              </label>
              <Input
                type="tel"
                value={phone}
                placeholder="Nhập số điện thoại của bạn"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-5 min-w-[180px] bg-gray-900 text-white py-3 rounded-lg text-sm font-medium uppercase tracking-wider
              transition-all duration-300 
              hover:bg-gray-800 hover:shadow-lg hover:opacity-90
              border border-transparent flex items-center justify-center"
            >
              <Info className="mr-2" size={16} />
              Đặt Xe
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <div
        ref={mapRef}
        className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 mt-10 min-h-[400px] lg:h-[684px] gap-6"
      >
        <motion.div
          initial="hidden"
          animate={isMapInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
          className="w-full h-[300px] md:h-[400px] lg:h-full relative"
        >
          <img
            src="/images/vietnam-map.png"
            alt="Bản đồ Việt Nam"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <ScrollArea className="h-[400px] md:h-[500px] lg:h-full w-full px-4 lg:pr-4">
          <div className="space-y-5 pb-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isMapInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{
                  backgroundImage: `url(${item.images})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="bg-gradient-to-t from-black via-black/70 to-transparent inset-0 flex flex-col justify-start p-4 sm:p-6 lg:p-8">
                  <motion.div
                    variants={fadeInUpVariants}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-4 sm:mb-6"
                  >
                    <div className="flex items-center gap-2 text-gray-200 mb-2">
                      <MapPin className="w-5 h-5 sm:size-7" />
                      <span className="text-xl sm:text-2xl lg:text-3xl font-medium">
                        Đi {item.province}
                      </span>
                    </div>
                    <p className="text-gray-200 text-sm sm:text-base max-w-xl italic">
                      Dịch vụ thuê xe chất lượng cao, đa dạng loại xe, phục vụ
                      di chuyển liên tỉnh trên toàn quốc.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUpVariants}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 text-white">
                      <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-300">
                          Loại xe
                        </p>
                        <p className="text-sm sm:text-base font-semibold">
                          4-7-16-29 chỗ
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-200">
                          Bảo hiểm
                        </p>
                        <p className="text-sm sm:text-base font-semibold">
                          100% chuyến đi
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-300">
                          Tài xế
                        </p>
                        <p className="text-sm sm:text-base font-semibold">
                          Chuyên nghiệp
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  onClick={() => onClick(item.code)}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white text-black py-1.5 px-3 sm:py-2 sm:px-4 rounded-xl text-sm sm:text-base font-bold tracking-wide hover:bg-gray-100 transition-colors"
                >
                  ĐẶT XE NGAY
                </motion.button>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <SectionFooterButton title="Đặt xe ngay" onClick={() => onClick()} />
      <InterprivincialRentalModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        defaultValues={modalDefaultValues}
      />
    </section>
  );
}
