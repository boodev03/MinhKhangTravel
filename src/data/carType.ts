import { CarType } from "@/types/car-rental";

export const carsType: CarType[] = [
  {
    id: 1,
    name: "Xe 4 chỗ",
    image: "/images/car-4-slots.png",
    price: "200.000",
    features: ["Sang trọng", "Riêng tư", "Tiện nghi"],
    accentColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    name: "Xe 7 chỗ",
    image: "/images/car-7-slots.png",
    price: "350.000",
    features: ["Rộng rãi", "Gia đình", "Thoải mái"],
    accentColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Xe 16 chỗ",
    image: "/images/car-16-slots.png",
    price: "600.000",
    features: ["Nhóm lớn", "Du lịch", "Chuyên nghiệp"],
    accentColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 4,
    name: "Xe 29 chỗ",
    image: "/images/car-29-slots.png",
    price: "900.000",
    features: ["Sự kiện", "Tour", "Đoàn lớn"],
    accentColor: "bg-rose-100 text-rose-800",
  },
];
