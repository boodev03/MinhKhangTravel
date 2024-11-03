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
import { CarType } from "@/types/car-rental";
import { useEffect, useState } from "react";

interface FormData {
  phone: string;
  service: string;
}

interface IProps {
  isModalOpen: boolean;
  selectedCar: CarType | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RentCarModal({
  isModalOpen,
  selectedCar,
  setIsModalOpen,
}: IProps) {
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({
      phone: "",
      service: selectedCar?.name || "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (selectedCar) {
      setFormData((prev) => ({ ...prev, service: selectedCar.name }));
    }
  }, [selectedCar]);

  return (
    <CommonDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại của bạn"
              required
              type="tel"
              pattern="[0-9]{10}"
              title="Vui lòng nhập số điện thoại 10 chữ số"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Dịch vụ</label>
            <Select
              value={formData.service}
              onValueChange={(value: string) =>
                setFormData((prev) => ({ ...prev, service: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn loại xe" />
              </SelectTrigger>
              <SelectContent>
                {carsType.map((car) => (
                  <SelectItem key={car.id} value={car.name}>
                    {car.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Đặt xe
        </Button>
      </form>
    </CommonDialog>
  );
}
