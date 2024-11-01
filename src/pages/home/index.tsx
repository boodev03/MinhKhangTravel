import BannerSection from "./Banner";
import CarRentalType from "./CarRentalType";
import PopularRoutes from "./PopularRoutes";
import "./styles.css";
export default function HomePage() {
  return (
    <>
      <BannerSection />
      <CarRentalType />
      <PopularRoutes />
    </>
  );
}
