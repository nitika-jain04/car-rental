import React, { useState } from "react";
import { TbCar } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import BookingConfirmation from "./Booking-Confirmation";

export default function CarBooking() {
  const [carType, setCarType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  const handleCustomerInfo = () => {
    setShowComponent(true);
  };

  const handleCloseModal = () => {
    setShowComponent(false);
  };

  return (
    <div className="bg-white">
      <form className="max-w-7xl mx-auto mt-5 p-4 md:p-12 bg-white rounded-md drop-shadow-xl">
        <h1 className="text-2xl font-bold">Book a Car</h1>
        {/* {(carType === "" ||
          pickupLocation === "" ||
          pickupDate === "" ||
          dropoffLocation === "" ||
          pickupDate === "") && (
          <div className="bg-red-200 px-3 py-2 rounded-md mt-2 flex justify-between">
            <p className="text-red-900 text-base tracking-wide">
              All fields required!
            </p>
            <IoMdClose className="text-red-900 text-xl" />
          </div>
        )} */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-6">
          <div className="w-full md:w-1/3">
            <div className="flex gap-2 items-center">
              <TbCar className="text-2xl mb-2" />
              <label htmlFor="carType" className="block font-bold mb-2">
                Select your car type{" "}
                <span className="text-lg text-orange-600 font-bold">*</span>
              </label>
            </div>
            <select
              id="carType"
              name="carType"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full py-3 px-2 border rounded-md text-gray-400 text-sm tracking-wide"
            >
              <option value="" defaultValue="Select Car Type">
                Select your car type
              </option>
              <option>Audi A1 S-Line</option>
              <option>VW Golf 6</option>
              <option>Toyota Camry</option>
              <option>BMW 320 ModernLine</option>
              <option>Mercedes-Benz GLK</option>
              <option>VW Passat CC</option>
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex gap-2 items-center">
              <FaLocationDot className="text-2xl mb-2" />
              <label htmlFor="pickupLocation" className="block font-bold mb-2">
                Pick-up{" "}
                <span className="text-lg text-orange-600 font-bold">*</span>
              </label>
            </div>
            <select
              id="carType"
              name="carType"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full py-3 px-2 border rounded-md text-gray-400 text-sm tracking-wide"
            >
              <option
                value="Select Pick up Location"
                defaultValue="Select Pick up Location"
              >
                Select pick up location
              </option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex gap-2 items-center">
              <FaLocationDot className="text-2xl mb-2" />
              <label htmlFor="dropoffLocation" className="block font-bold mb-2">
                Drop-of{" "}
                <span className="text-lg text-orange-600 font-bold">*</span>
              </label>
            </div>
            <select
              id="carType"
              name="carType"
              value="Select Drop of location"
              onChange={(e) => setCarType(e.target.value)}
              className="w-full py-3 px-2 border rounded-md text-gray-400 text-sm tracking-wide"
            >
              <option value="" defaultValue="Select drop of Location">
                Select drop off location
              </option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 mt-6 items-center">
          <div className="w-full md:w-1/3">
            <div className="flex gap-2 items-center">
              <CiCalendarDate className="text-2xl mb-2 font-extrabold" />
              <label htmlFor="pickupDate" className="block font-bold mb-2">
                Pick-up{" "}
                <span className="text-lg text-orange-600 font-bold">*</span>
              </label>
            </div>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-[370px] py-3 px-2 border rounded-md text-gray-400 text-sm tracking-wide"
            />
          </div>

          <div className="w-full md:w-1/3">
            <div>
              <div className="flex gap-2 items-center">
                <CiCalendarDate className="text-2xl mb-2 font-extrabold" />
                <label htmlFor="dropoffDate" className="block font-bold mb-2">
                  Drop-of{" "}
                  <span className="text-lg text-orange-600 font-bold">*</span>
                </label>
              </div>
            </div>
            <input
              type="date"
              id="dropoffDate"
              name="dropoffDate"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              className="w-[370px] py-3 px-2 border rounded-md text-gray-400 text-sm tracking-wide"
            />
          </div>

          <div className="w-full md:w-1/3">
            <button
              type="button"
              onClick={handleCustomerInfo}
              className="bg-orange-600 text-white px-2 py-2 w-96 mt-8 h-12 font-bold text-lg hover:drop-shadow-xl hover:shadow-orange-600"
            >
              Search
            </button>
            {showComponent && (
              <BookingConfirmation onClose={handleCloseModal} />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
