import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="h-[74px]">
      <div className="container mx-auto flex items-center gap-10">
        <NavLink to="/">
          <img
            src="/images/logo.png"
            alt="Minh Khang Travel"
            className="max-h-[70px] w-[140px] object-cover"
          />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
}
