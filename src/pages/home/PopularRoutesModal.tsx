import CommonDialog from "@/components/CommonDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carsType } from "@/data/carType";
import React, { useEffect } from "react";

export interface PopularRoutesModalFormData {
  startPoint: string;
  endPoint: string;
  phone: string;
  carType: string;
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
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            Điểm đi
          </label>
          <Input
            name="pickup"
            className="w-full"
            placeholder="Điểm đi"
            disabled
            value={formData.startPoint}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            Điểm đến
          </label>
          <Input
            name="destination"
            className="w-full"
            placeholder="Điểm đến"
            disabled
            value={formData.endPoint}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Chọn loại xe
          </label>
          <Select
            name="carType"
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
                      {car.name} - {car.price}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <Input
            name="phone"
            onChange={handleInputChange}
            placeholder="Nhập số điện thoại của bạn"
            required
            type="tel"
            pattern="[0-9]{10}"
            title="Vui lòng nhập số điện thoại 10 chữ số"
            className="w-full"
            value={formData.phone}
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
};

export default PopularRoutesModal;
