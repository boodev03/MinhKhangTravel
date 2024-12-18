import { sendMessage } from "@/api";
import CommonDialog from "@/components/CommonDialog";
import { DatePickerWithRange } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { carsType } from "@/data/carType";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";

export interface PopularRoutesModalFormData {
  startPoint: string;
  endPoint: string;
  phone: string;
  carType: string;
  message: string;
}

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValues?: PopularRoutesModalFormData;
}

const PopularRoutesModal = ({
  isModalOpen,
  setIsModalOpen,
  defaultValues,
}: IProps) => {
  const [formData, setFormData] = React.useState<PopularRoutesModalFormData>({
    startPoint: "",
    endPoint: "",
    phone: "",
    carType: "",
    message: "",
  });

  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetData = () => {
    setFormData({
      startPoint: "",
      endPoint: "",
      phone: "",
      carType: "",
      message: "",
    });

    setDateRange(undefined);
  };

  const onSubmit = async () => {
    const message = `Điểm đi: ${formData.startPoint}\nĐiểm đến: ${
      formData.endPoint
    }\nLoại xe: ${formData.carType}\nSố điện thoại liên hệ: ${
      formData.phone
    }\nNgày đi: ${
      dateRange?.from ? dateRange.from.toLocaleDateString("vi-VN") : ""
    }\nNgày về: ${
      dateRange?.to ? dateRange.to.toLocaleDateString("vi-VN") : ""
    }\nLời nhắn: ${formData.message}`;

    const payload = {
      phone: formData.phone,
      message,
    };

    const res = await sendMessage(payload);
    if (res) {
      resetData();
      setIsModalOpen(false);
      toast("Để lại lời nhắn thành công");
    } else {
      toast("Đặt xe thất bại. Vui lòng thử lại sau.");
    }
  };

  useEffect(() => {
    if (defaultValues) {
      setFormData(defaultValues);
    }
  }, [defaultValues]);

  return (
    <CommonDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            Điểm đi <span className="text-red-600">*</span>
          </label>
          <Input
            name="pickup"
            className="w-full"
            placeholder="Điểm đi"
            disabled={defaultValues?.startPoint ? true : false}
            value={formData.startPoint}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            Điểm đến <span className="text-red-600">*</span>
          </label>
          <Input
            name="destination"
            className="w-full"
            placeholder="Điểm đến"
            disabled={defaultValues?.endPoint ? true : false}
            value={formData.endPoint}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Chọn loại xe <span className="text-red-600">*</span>
          </label>
          <Select
            name="carType"
            required
            onValueChange={(value) =>
              setFormData((pre) => ({
                ...pre,
                carType: value,
              }))
            }
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
                      {car.name}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Số điện thoại <span className="text-red-600">*</span>
          </label>
          <Input
            name="phone"
            onChange={handleInputChange}
            placeholder="Nhập số điện thoại của bạn"
            required
            type="tel"
            pattern="^(0|\+84)[3-9][0-9]{8}$"
            title="Vui lòng nhập số điện thoại 10 chữ số"
            className="w-full"
            value={formData.phone}
          />
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
            onChange={handleInputChange}
            placeholder="Nhập lời nhắn"
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
};

export default PopularRoutesModal;
