import { sendMessage } from "@/api";
import { carsType } from "@/data/carType";
import { ApiPayload } from "@/types/api-payload";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";
import CommonDialog from "./CommonDialog";
import { DatePickerWithRange } from "./DatePicker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
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
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const onChange = (key: string, value: string) => {
    setFormData((pre) => ({
      ...pre,
      [key]: value,
    }));
  };

  const resetData = () => {
    setFormData({
      phone: "",
      message: "",
      carType: "",
    });
    setDateRange(undefined);
  };

  const onSubmit = async () => {
    const message = `Loại xe: ${formData.carType}\nLời nhắn: ${
      formData.message
    }\nNgày bắt đầu: ${
      dateRange?.from ? dateRange.from.toLocaleDateString("vi-VN") : ""
    }\nNgày kết thúc: ${
      dateRange?.to ? dateRange.to.toLocaleDateString("vi-VN") : ""
    }`;
    const payload: ApiPayload = {
      phone: formData.phone,
      message: message,
    };
    const res = await sendMessage(payload);
    if (res) {
      toast("Đặt xe thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.");
      resetData();
      setIsModalOpen(false);
    } else {
      toast("Đặt xe thất bại. Vui lòng thử lại sau.");
    }
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
                    <span>{car.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <DatePickerWithRange
            className="[&_button]:!w-full"
            date={dateRange}
            setDate={setDateRange}
          />
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
        onClick={onSubmit}
        type="submit"
        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
      >
        Đặt xe
      </Button>
    </CommonDialog>
  );
}
