export interface VehicleType {
  type: string;
  price: number;
}

export interface Destination {
  name: string;
  image: string;
}

export interface Route {
  start: string;
  end: string;
}

export interface PopularRouteCardProps {
  destination: Destination;
  route: Route;
  distance: number;
  travelTime: number;
  vehicleTypes: VehicleType[];
}
