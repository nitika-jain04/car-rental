import React, { useState } from "react";

export default function CarBooking() {
  const [carType, setCarType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };

  return (
    <div className="bg-white">
      <form className="max-w-7xl mx-auto mt-28 p-12 bg-white rounded-md drop-shadow-xl">
        <h1 className="text-2xl font-bold tracking-wide">Book a Car</h1>
        <div className="flex gap-10 mt-6">
          <div className="w-96">
            <label htmlFor="carType" className="block font-bold mb-2">
              Select your car type
            </label>
            <select
              id="carType"
              name="carType"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="" defaultValue="Select Car Type">
                Select Car Type
              </option>
              <option>Audi A1 S-Line</option>
              <option>VW Golf 6</option>
              <option>Toyota Camry</option>
              <option>BMW 320 ModernLine</option>
              <option>Mercedes-Benz GLK</option>
              <option>VW Passat CC</option>
            </select>
          </div>

          <div className="w-96">
            <label htmlFor="pickupLocation" className="block font-bold mb-2">
              Pick-up
            </label>
            <select
              id="carType"
              name="carType"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option
                value="Select Pick up Location"
                defaultValue="Select Pick up Location"
              >
                Select Pick up Location
              </option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
            </select>
          </div>

          <div className="w-96">
            <label htmlFor="dropoffLocation" className="block font-bold mb-2">
              Drop-of
            </label>
            <select
              id="carType"
              name="carType"
              value="Select Drop of location"
              onChange={(e) => setCarType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="" defaultValue="Select drop of Location">
                Select Drop of Location
              </option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10 mt-6 items-center">
          <div>
            <label htmlFor="pickupDate" className="block font-bold">
              Pick-up
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-96 p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="dropoffDate" className="block font-bold">
              Drop-of
            </label>
            <input
              type="date"
              id="dropoffDate"
              name="dropoffDate"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              className="w-96 p-2 border rounded-md"
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="bg-blue-500 text-white px-2 py-2 w-96"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
