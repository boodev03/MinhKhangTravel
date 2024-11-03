import { ZaloIcon } from "@/icons/ZaloIcon";
import { Contact2, Phone } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";
import "./styles.css";

export default function ContactOptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center p-4 fixed right-3 bottom-3 z-[9999] space-y-10">
        <a
          href="https://zalo.me/0357111566"
          className="size-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors relative group animate-button"
          aria-label="Contact via Zalo"
          target="_blank"
        >
          <ZaloIcon />
          <span
            style={{
              animationDuration: "1500ms",
            }}
            className="absolute delay-500 -inset-1 rounded-full animate-ping bg-blue-400 opacity-75 group-hover:opacity-0 transition-opacity"
          ></span>
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="size-12 bg-[#a033ff] rounded-full flex items-center justify-center text-white transition-colors relative group animate-button"
        >
          <Contact2 className="size-6" />
          <span
            style={{
              animationDuration: "1500ms",
            }}
            className="absolute delay-500 -inset-1 rounded-full animate-ping bg-gradient-to-br from-[#00B2FF] via-[#a033ff] to-[#ff5280] opacity-75 group-hover:opacity-0 transition-opacity"
          ></span>
        </button>
        <a
          href="tel:0357111566"
          className="size-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors relative group animate-button"
          aria-label="Call phone number"
        >
          <Phone className="size-6" />
          <span
            style={{
              animationDuration: "1500ms",
            }}
            className="absolute delay-500 -inset-1 rounded-full animate-ping bg-red-400 opacity-75 group-hover:opacity-0 transition-opacity"
          ></span>
        </a>
      </div>
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
