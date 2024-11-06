import SEOConfig from "@/components/SEO";
import BannerSection from "./Banner";
import CarRentalType from "./CarRentalType";
import Experience from "./Experience";
import InterprovincialCarRental from "./InterprovincialCarRental";
import PopularRoutes from "./PopularRoutes";
import RentalProcedure from "./RentalProcedure";
import "./styles.css";
export default function HomePage() {
  return (
    <>
      <SEOConfig
        title="MinhKhangTravel - Dịch vụ cho thuê xe 4, 7, 16, 29 chỗ tại Việt Nam"
        description="MinhKhangTravel cung cấp dịch vụ cho thuê xe uy tín, tiện lợi với các loại xe 4, 7, 16, và 29 chỗ phù hợp cho mọi nhu cầu di chuyển ở Việt Nam. Đặt xe dễ dàng, giá cả phải chăng."
        keywords="thuê xe, thuê xe Việt Nam, thuê xe MinhKhangTravel, thuê xe 4 chỗ, thuê xe 7 chỗ, thuê xe 16 chỗ, thuê xe 29 chỗ"
      />
      <BannerSection />
      <CarRentalType />
      <InterprovincialCarRental />
      <PopularRoutes />
      <RentalProcedure />
      <Experience />
    </>
  );
}
