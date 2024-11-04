import { useState } from "react";
import CommonDialog from "./CommonDialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { carsType } from "@/data/carType";
import { Textarea } from "./ui/textarea";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
  phone: string;
  message: string;
  carType: string;
}

export default function ContactModal({ isModalOpen, setIsModalOpen }: IProps) {
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    message: "",
    carType: "",
  });
  const onChange = (key: string, value: string) => {
    setFormData((pre) => ({
      ...pre,
      [key]: value,
    }));
  };
  return (
    <CommonDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <Input
            id="phone"
            name="phone"
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="Nhập số điện thoại của bạn"
            required
            type="tel"
            pattern="^(0|\+84)[3-9][0-9]{8}$"
            title="Vui lòng nhập số điện thoại 10 chữ số"
            className="w-full"
            value={formData.phone}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Chọn loại xe
          </label>
          <Select
            name="carType"
            onValueChange={(value) => onChange("carType", value)}
            value={formData.carType}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn loại xe" />
            </SelectTrigger>
            <SelectContent>
              {carsType.map((car) => (
                <SelectItem key={car.id} value={car.name}>
                  <div className="flex justify-between w-full">
                    <span>
                      {car.name} - {car.price}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Lời nhắn
          </label>
          <Textarea
            id="message"
            name="message"
            onChange={(e) => onChange("message", e.target.value)}
            placeholder="Nhập ghi chú"
            required
            className="w-full"
            value={formData.message}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
      >
        Đặt xe
      </Button>
    </CommonDialog>
  );
}
