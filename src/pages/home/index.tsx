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
      <BannerSection />
      <CarRentalType />
      <InterprovincialCarRental />
      <PopularRoutes />
      <RentalProcedure />
      <Experience />
    </>
  );
}
