import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { minhKhangTravelInfo } from "@/data";
import { ZaloIcon } from "@/icons/ZaloIcon";
import { Phone } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

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
      <DialogContent className="sm:max-w-[500px] max-w-[90vw] rounded-[12px] p-0">
        <ScrollArea className="max-h-[90vh] py-6">
          <DialogHeader className="px-6">
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Đăng Ký Thuê Xe
              <p className="text-base text-gray-700 font-medium mt-2">
                Quý khách để lại lời nhắn, Minh Khang Travel sẽ liên hệ lại ngay
              </p>
            </DialogTitle>
          </DialogHeader>

          <div className="px-6">{children}</div>

          <div className="mt-3 pt-3 border-t border-gray-200 px-6">
            <h3 className="font-semibold text-center mb-2">
              Liên hệ ngay bây giờ
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href={minhKhangTravelInfo.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <ZaloIcon width={26} height={26} />
                </div>
              </a>

              <a
                href={`tel:${minhKhangTravelInfo.phoneNumber}`}
                className="size-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors relative"
                aria-label="Call phone number"
              >
                <Phone className="size-5" />
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
