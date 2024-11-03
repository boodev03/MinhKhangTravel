import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function CommonDialog({
  isModalOpen,
  setIsModalOpen,
  children,
}: IProps) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="p-5 sm:max-w-[500px] max-w-[90vw] max-h-[90vh] overflow-auto rounded-[12px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Đăng Ký Thuê Xe
            <p className="text-base text-gray-700 font-medium mt-2">
              Quý khách để lại lời nhắn, Minh Khang Travel sẽ liên hệ lại ngay
            </p>
          </DialogTitle>
        </DialogHeader>

        {children}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-center mb-4">
            Liên hệ ngay bây giờ
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://zalo.me/your-zalo-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <img src="/images/zalo.svg" alt="" className="size-6" />
              </div>
            </a>

            <a
              href="tel:0123456789"
              className="flex flex-col items-center group"
            >
              <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Phone className="size-6" strokeWidth={1.5} />
              </div>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
