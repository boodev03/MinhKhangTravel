import { minhKhangTravelInfo } from "@/data";
import { ZaloIcon } from "@/icons/ZaloIcon";
import { motion } from "framer-motion";
import { Car, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pb-8 pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <NavLink to="/">
            <img
                src="/images/logo.png"
                alt="Minh Khang Travel"
                className="max-h-[200px] w-full object-cover rounded-[12px]"
              />
            </NavLink>
            <div className="space-y-3">
              <motion.p
                variants={fadeInUp}
                className="flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5 text-[#3B82F6]" />
                <span>Thành phố Hồ Chí Minh</span>
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="flex items-center space-x-2"
              >
                <Phone className="h-5 w-5 text-[#3B82F6]" />
                <span>{minhKhangTravelInfo.phoneNumber}</span>
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="flex items-center space-x-2"
              >
                <ZaloIcon width={20} height={20} />
                <a
                  href={minhKhangTravelInfo.zalo}
                  className="hover:underline"
                  target="_blank"
                >
                  {minhKhangTravelInfo.zalo}
                </a>
              </motion.p>
            <img
                src="/bocongthuong.webp"
                alt="Minh Khang Travel"
                className="max-h-[80px] object-cover rounded-[12px]"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold text-[#3B82F6]">Công ty</h3>
            <ul className="space-y-3">
              {[
                "Giới thiệu",
                "An toàn - Uy tín - Chất lượng",
                "Các tuyến đường phổ biến",
                "Kinh nghiệm làm việc",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 5, color: "#38BDF8" }}
                  className="cursor-pointer transition-all duration-200 hover:text-[#3B82F6]"
                >
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold text-[#3B82F6]">
              Dịch vụ cho thuê xe
            </h3>
            <ul className="space-y-3">
              {["Xe 4 chỗ", "Xe 7 chỗ", "Xe 16 chỗ", "Xe 29 chỗ"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 5, color: "#38BDF8" }}
                    className="cursor-pointer transition-all duration-200 hover:text-[#3B82F6] flex items-center space-x-2"
                  >
                    <Car className="h-4 w-4" />
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold text-[#3B82F6]">
              Đăng ký nhận tin
            </h3>
            <p className="text-sm text-gray-300">
              Nhận thông tin ưu đãi và cập nhật mới nhất từ chúng tôi.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-2 bg-[#3B82F6] text-gray-900 rounded-md font-semibold hover:bg-sky-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Đăng ký
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Minh Khang Travel
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
