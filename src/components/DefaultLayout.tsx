import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ContactOptions from "./ContactOption";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ContactOptions />
    </>
  );
}
