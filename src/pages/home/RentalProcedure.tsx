import HeadingSection from "@/components/HeadingSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import {
  CalendarClock,
  Car,
  CircleDollarSign,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { useRef } from "react";

const BookingProcess = () => {
  const titleRef = useRef(null);
  const contentBodyRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    once: true,
  });

  const isContentInView = useInView(contentBodyRef, {
    once: true,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="bg-gray-50">
      <div ref={titleRef} className="container mx-auto py-16 px-4">
        <HeadingSection isInView={isTitleInView} title="Quy trình đặt xe" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          ref={contentBodyRef}
          animate={isContentInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-8 transform transition-all hover:shadow-xl"
          >
            <img
              src="/images/car-rental-illus.jpg"
              alt="Car Rental Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
          </motion.div>

          {/* Right side - Booking Process */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  icon: PhoneCall,
                  title: "1. Liên hệ đặt xe",
                  value: "step1",
                  content: [
                    "• Gọi hotline: 1900.xxxx",
                    "• Nhắn tin qua Zalo/Facebook",
                    "• Gửi yêu cầu qua website",
                    "Nhân viên tư vấn sẽ hỗ trợ bạn trong vòng 30 phút",
                  ],
                },
                {
                  icon: Car,
                  title: "2. Chọn loại xe phù hợp",
                  value: "step2",
                  content: [
                    "• Xe 4 chỗ: Phù hợp 2-4 người",
                    "• Xe 7 chỗ: Phù hợp 5-7 người",
                    "• Xe 16 chỗ: Phù hợp 8-16 người",
                    "Xe đời mới, đầy đủ tiện nghi, bảo hiểm",
                  ],
                },
                {
                  icon: MapPin,
                  title: "3. Xác nhận lộ trình",
                  value: "step3",
                  content: [
                    "• Điểm đón và điểm đến",
                    "• Các điểm dừng chân (nếu có)",
                    "• Ước tính quãng đường và thời gian",
                    "Tài xế sẽ liên hệ trước giờ đón 30 phút",
                  ],
                },
                {
                  icon: CalendarClock,
                  title: "4. Xác nhận thời gian",
                  value: "step4",
                  content: [
                    "• Ngày giờ đón khách",
                    "• Thời gian dự kiến di chuyển",
                    "• Thời gian chờ (nếu có)",
                    "Đề xuất đặt xe trước ít nhất 24h",
                  ],
                },
                {
                  icon: CircleDollarSign,
                  title: "5. Thanh toán",
                  value: "step5",
                  content: [
                    "• Báo giá chi tiết",
                    "• Đặt cọc 30% (nếu cần)",
                    "• Thanh toán sau khi hoàn thành",
                    "Nhận hóa đơn VAT theo yêu cầu",
                  ],
                },
              ].map((step) => (
                <AccordionItem
                  key={step.value}
                  value={step.value}
                  className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <step.icon className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">{step.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-2 pl-8">
                      {step.content.map((line, index) => (
                        <p
                          key={index}
                          className={
                            index === step.content.length - 1
                              ? "text-sm text-gray-500 mt-2"
                              : ""
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <motion.button
              className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium uppercase tracking-wider
            transition-all duration-300 
            hover:bg-gray-800 hover:shadow-lg hover:opacity-90
            border border-transparent flex items-center justify-center"
            >
              Liên hệ để đặt xe
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingProcess;
