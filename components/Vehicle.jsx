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
    <div className="mt-10 sm:mt-20 md:mt-28">
      <div className="text-center mt-5">
        <h5 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
          Vehicle Models
        </h5>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 tracking-wide">
          Our rental fleet
        </h1>
        <p className="text-gray-500 text-sm sm:text-md md:text-lg mt-3">
          Choose from a variety of our amazing vehicles to rent for your next
          <br />
          adventure or business trip
        </p>
      </div>
      <div className="flex flex-col mt-8 sm:mt-12 md:mt-14 lg:mt-16 justify-between sm:flex-row md:flex-row">
        <div className="flex flex-col gap-2 text-start sm:ml-4 md:ml-16 lg:ml-16 xl:ml-16">
          {vehicles.map((vehicle, index) => (
            <button
              key={index}
              className={`text-md sm:text-lg md:text-xl font-bold px-4 sm:px-6 py-2 sm:py-3 md:py-4 tracking-wide text-left ${
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
          className="w-full sm:w-2/5 md:w-2/5 lg:w-1/3 xl:w-1/3 mx-auto mt-4 sm:mt-0 md:mt-0"
          src={selectedVehicle.image}
          alt=""
        />
        <div className="flex flex-col w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 mx-auto mt-4 sm:mt-0 md:mt-0">
          <div className="bg-orange-600 flex items-center text-white px-2 py-1 sm:px-4 sm:py-2 md:py-1 tracking-wide justify-center">
            <span className="text-sm sm:text-lg md:text-xl font-semibold mr-2">
              ${selectedVehicle.rent}
            </span>
            / rent per day
          </div>
          {selectedVehicle && <VehicleDetails vehicle={selectedVehicle} />}
          <div className="bg-orange-600 text-white text-center px-2 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-md font-bold mt-4 sm:mt-5 md:mt-5 shadow-xl">
            <button className="text-md sm:text-lg md:text-xl font-bold">
              RESERVE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
