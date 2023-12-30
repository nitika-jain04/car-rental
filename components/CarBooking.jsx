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
              <option value="">Select Car Type</option>
              {/* Add your car type options here */}
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
              <option value="">Select Car Type</option>
              {/* Add your car type options here */}
            </select>
          </div>

          <div className="w-96">
            <label htmlFor="dropoffLocation" className="block font-bold mb-2">
              Drop-of
            </label>
            <select
              id="carType"
              name="carType"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Car Type</option>
              {/* Add your car type options here */}
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
