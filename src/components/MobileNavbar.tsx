import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const data = [
  { title: "Trang chủ", href: "/" },
  { title: "Thuê xe 4 chỗ", href: "/xe-4-cho" },
  { title: "Thuê xe 7 chỗ", href: "/xe-7-cho" },
  { title: "Thuê xe 16 chỗ", href: "/xe-16-cho" },
  { title: "Thuê xe 29 chỗ", href: "/xe-29-cho" },
];

const menuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const linkVariants = {
  closed: { x: 20, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 lg:hidden flex-1 flex justify-end">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="z-50 p-2 border border-gray-200 rounded-full text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      )}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-72 h-screen bg-white/90 flex flex-col shadow-lg"
            >
              <div className="px-6 py-5 flex justify-between items-center backdrop-blur supports-backdrop-blur:bg-white/95">
                <h2 className="text-lg font-medium tracking-wider uppercase text-gray-900">
                  Minh Khang Travel
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 transition-all duration-300"
                  aria-label="Close menu"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
              <ul className="px-3 py-2 flex-grow">
                {data.map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `group flex items-center px-3 py-2.5 text-sm tracking-wide rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-gray-900 bg-gray-100/70 font-medium"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                      <ChevronRight
                        className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-gray-400 transition-all duration-300"
                        size={16}
                        strokeWidth={1.5}
                      />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="relative px-6 py-5 before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-200 before:to-transparent">
                <h3 className="text-[13px] font-medium tracking-wider text-gray-400 mb-4">
                  Liên hệ
                </h3>
                <ul className="space-y-3.5">
                  <li>
                    <a
                      href="tel:+84123456789"
                      className="group flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      <Phone
                        size={16}
                        strokeWidth={1.5}
                        className="mr-3 text-gray-400 group-hover:text-gray-600"
                      />
                      <span className="tracking-wide">+84 123 456 789</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@minhkhangtravel.com"
                      className="group flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      <Mail
                        size={16}
                        strokeWidth={1.5}
                        className="mr-3 text-gray-400 group-hover:text-gray-600"
                      />
                      <span className="tracking-wide">
                        info@minhkhangtravel.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="group flex items-center text-sm text-gray-600">
                      <MapPin
                        size={16}
                        strokeWidth={1.5}
                        className="mr-3 text-gray-400"
                      />
                      <span className="tracking-wide">
                        123 Đường ABC, Quận XYZ, TP.HCM
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
