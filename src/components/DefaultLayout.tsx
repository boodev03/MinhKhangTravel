import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ContactOptions from "./ContactOption";
import { useLayoutEffect } from "react";
import { Toaster } from "./ui/sonner";

export default function DefaultLayout() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ContactOptions />
      <Toaster position="top-right" />
    </>
  );
}
