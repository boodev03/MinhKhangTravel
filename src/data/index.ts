import vietNamAddress from "./vietnamAddress.json";
export const vietNamAddressFormat = vietNamAddress.map((item) => ({
  value: item.Name,
  label: item.Name,
}));

export const minhKhangTravelInfo = {
  phoneNumber: "0704 144 144",
  zalo: "https://zalo.me/0704144144",
};
