import VehicleCard from "./VehicleCard";

const vehicleData = [
  {
    image: "/audi.png",
    carBrand: "Audi A1",
    price: "45",
    carName: "Audi",
    carType: "Manual",
    tankType: "Diesel",
  },
  {
    image: "/vw.png",
    carBrand: "Golf 6",
    price: "37",
    carName: "VW",
    carType: "Manual",
    tankType: "Diesel",
  },
  {
    image: "/camry.png",
    carBrand: "Toyota",
    price: "30",
    carName: "Camry",
    carType: "Manual",
    tankType: "Diesel",
  },
  {
    image: "/bmw.png",
    carBrand: "BMW 320",
    price: "35",
    carName: "ModernLine",
    carType: "Manual",
    tankType: "Diesel",
  },
  {
    image: "/mercedes.png",
    carBrand: "Mercedes",
    price: "50",
    carName: "Benz GLK",
    carType: "Manual",
    tankType: "Diesel",
  },
  {
    image: "/passat.png",
    carBrand: "VW Passat",
    price: "25",
    carName: "CC",
    carType: "Manual",
    tankType: "Diesel",
  },
];

export default function HeroSection() {
  return (
    <div className="mt-40 flex flex-wrap gap-20 justify-center">
      {vehicleData.map((data) => {
        return (
          <VehicleCard
            image={data.image}
            carbrand={data.carBrand}
            price={data.price}
            carname={data.carName}
            cartype={data.carType}
            fueltype={data.tankType}
          />
        );
      })}
    </div>
  );
}
