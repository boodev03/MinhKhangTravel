import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";

const data = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Thuê xe 4 chỗ",
    href: "/xe-4-cho",
  },
  {
    title: "Thuê xe 7 chỗ",
    href: "/xe-7-cho",
  },
  {
    title: "Thuê xe 16 chỗ",
    href: "/xe-16-cho",
  },
  {
    title: "Thuê xe 29 chỗ",
    href: "/xe-29-cho",
  },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <>
      <nav className="flex-1 lg:block hidden">
        <ul className="flex items-center gap-1 md:gap-3">
          {data.map((item) => (
            <motion.li
              key={item.href}
              className="relative"
              onHoverStart={() => setHoveredItem(item.href)}
              onHoverEnd={() => setHoveredItem("")}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `relative inline-block font-medium text-sm md:text-base py-2 px-3 transition-all duration-300 ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`
                }
              >
                <span className="relative z-10 uppercase tracking-wide">
                  {item.title}
                </span>

                <AnimatePresence>
                  {hoveredItem === item.href && (
                    <>
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 bg-black/5 rounded-lg -z-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                      />

                      {/* Bottom line */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-black rounded-full"
                        initial={{ width: 0, x: "50%" }}
                        animate={{
                          width: "100%",
                          x: "0%",
                        }}
                        exit={{
                          width: 0,
                          x: "50%",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                      />

                      {/* Top line */}
                      <motion.div
                        className="absolute top-0 right-0 h-[2px] bg-black rounded-full"
                        initial={{ width: 0, x: "-50%" }}
                        animate={{
                          width: "100%",
                          x: "0%",
                        }}
                        exit={{
                          width: 0,
                          x: "-50%",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                      />
                    </>
                  )}
                </AnimatePresence>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
      <MobileNavbar />
    </>
  );
}
