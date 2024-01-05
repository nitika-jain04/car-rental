import React, { useState } from "react";

const vehicles = [
  {
    name: "Audi A1 S-Line",
    image: "/vehicle1.jpg",
    model: "Audi",
    mark: "A1",
    year: 2012,
    transmission: "Manual",
    fuel: "Gasoline",
    rent: 45,
  },
  {
    name: "VW Golf 6",
    image: "/vehicle2.jpg",
    model: "Golf 6",
    mark: "Volkswagen",
    year: 2008,
    transmission: "Manual",
    fuel: "Diesel",
    rent: 37,
  },
  {
    name: "Toyota Camry",
    image: "/vehicle3.jpg",
    model: "Camry",
    mark: "Toyota",
    year: 2006,
    transmission: "Automatic",
    fuel: "Hybrid",
    rent: 30,
  },
  {
    name: "BMW 320 ModernLine",
    image: "/vehicle4.jpg",
    model: "320",
    mark: "BMW",
    year: 2012,
    transmission: "Manual",
    fuel: "Diesel",
    rent: 35,
  },
  {
    name: "Mercedes Benz GLK",
    image: "/vehicle5.jpg",
    model: "Benz GLK",
    mark: "Mercedes",
    year: 2006,
    transmission: "Manual",
    fuel: "Diesel",
    rent: 50,
  },
  {
    name: "VW Passat CC",
    image: "/vehicle6.jpg",
    model: "Passat CC",
    mark: "Volkswagen",
    year: 2008,
    transmission: "Automatic",
    fuel: "Gasoline",
    rent: 25,
  },
];

const VehicleDetails = ({ vehicle }) => {
  return (
    <div>
      <div className="flex gap-5 justify-center border border-black px-2 py-2">
        <h2>Model</h2>
        <h2>|</h2>
        <p>{vehicle.model}</p>
      </div>
      <div className="flex gap-5 justify-center border border-black px-2 py-2">
        <h2>Mark</h2>
        <h2>|</h2>
        <p>{vehicle.mark}</p>
      </div>
      <div className="flex gap-5 justify-center border border-black px-2 py-2">
        <h2>Year</h2>
        <h2>|</h2>
        <p>{vehicle.year}</p>
      </div>
      <div className="flex gap-5 justify-center border border-black px-2 py-2">
        <h2>Doors</h2>
        <h2>|</h2>
        <p>4/5</p>
      </div>
      <div className="flex gap-5 justify-center border border-black px-2 py-2">
        <h2>AC</h2>
        <h2>|</h2>
        <p>Yes</p>
      </div>
      <div className="flex gap-5 justify-center border border-black px-2 py-2">
        <h2>Transmission</h2>
        <h2>|</h2>
        <p>{vehicle.transmission}</p>
      </div>
      <div className="flex gap-5 justify-center border border-black px-2 py-2">
        <h2>Fuel</h2>
        <h2>|</h2>
        <p>{vehicle.fuel}</p>
      </div>
    </div>
  );
};

export default function Vehicle() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  const handleVehicleChange = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <div className="mt-28">
      <div className="text-center mt-5">
        <h5 className="text-2xl font-semibold tracking-wide">Vehicle Models</h5>
        <h1 className="text-4xl font-extrabold mt-3 tracking-wide">
          Our rental fleet
        </h1>
        <p className="text-gray-500 text-md mt-3">
          Choose from a variety of our amazing vehicles to rent for your next
          <br />
          adventure or business trip
        </p>
      </div>
      <div className="flex mt-14 justify-between">
        <div className="flex flex-col gap-2 text-start ml-16">
          {vehicles.map((vehicle, index) => (
            <button
              key={index}
              className={`text-xl font-bold px-6 py-4 tracking-wide text-left ${
                selectedVehicle.name === vehicle.name
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 hover:bg-orange-600 hover:text-white"
              }`}
              onClick={() => handleVehicleChange(vehicle)}
            >
              {vehicle.name}
            </button>
          ))}
        </div>
        <img
          className="max-w-6xl ml-28 mr-28 max-h-96"
          src={selectedVehicle.image}
          alt=""
        />
        <div className="flex flex-col w-72 mr-20">
          <div className="bg-orange-600 text-white text-center px-4 py-1 tracking-wide">
            <span className="text-2xl font-semibold">
              ${selectedVehicle.rent}
            </span>{" "}
            / rent per day
          </div>
          {selectedVehicle && <VehicleDetails vehicle={selectedVehicle} />}
          <div className="bg-orange-600 text-white text-center px-4 py-3 text-sm font-bold mt-5">
            <button className="text-xl font-bold">RESERVE NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
