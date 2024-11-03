import vietNamAddress from "./vietnamAddress.json";
export const vietNamAddressFormat = vietNamAddress.map((item) => ({
  value: item.Name,
  label: item.Name,
}));
