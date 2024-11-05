import HomePage from "@/pages/home";
import Car4 from "@/pages/cars/Car4";
import Car7 from "@/pages/cars/Car7";
import Car16 from "@/pages/cars/Car16";
import Car29 from "@/pages/cars/Car29";


export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/xe-4-cho",
    component: Car4,
  },
  {
    path: "/xe-7-cho",
    component: Car7,
  },
  {
    path: "/xe-16-cho",
    component: Car16,
  },
  {
    path: "/xe-29-cho",
    component: Car29,
  }
];
