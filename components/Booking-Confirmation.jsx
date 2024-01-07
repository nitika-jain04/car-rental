import { BsInfo } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import PersonalInfoCard from "./UI/PersonalInfo-Card";
// import { useEffect } from "react";

export default function BookingConfirmation({ onClose }) {
  // useEffect(() => {
  //   document.body.classList.add("overflow-hidden");

  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center bg-black bg-opacity-10">
      <div className="bg-white p-1 rounded shadow-md">
        <div className="flex justify-between bg-orange-600 p-3 items-center">
          <h1 className=" uppercase text-white text-xl font-extrabold">
            Complete Reservation
          </h1>
          <IoMdClose className="text-white text-2xl" onClick={onClose} />
        </div>
        <div className="bg-orange-50 p-5">
          <div className="flex gap-2 items-center">
            <BsInfo className="bg-orange-600 rounded-full text-xl text-white" />
            <h1 className="text-orange-600 font-extrabold text-lg tracking-wide">
              Upon completing this reservation enquiry, you will receive:
            </h1>
          </div>
          <p className="mt-4 font-2xl text-gray-500 font-semibold tracking-wide">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer<br></br> support number.
          </p>
        </div>

        {/* <div className="mt-10 px-8">
          <div className="flex justify-between">
            <h2 className="text-lg text-orange-600 font-extrabold tracking-wide">
              Location & Date
            </h2>
            <h2 className="text-lg font-extrabold mr-20">
              Car -{" "}
              <span className="text-orange-600 font-extrabold">
                BMW 320 ModernLine
              </span>
            </h2>
          </div>

          <div className="px-8">
            <div className="flex">
              <FaLocationDot className="text-2xl" />
              <div>
                <h4>Pick-Up Date & Time</h4>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          <hr />
        </div>

        <div className="px-8 mt-5">
          <h1 className="uppercase font-extrabold text-orange-600">
            Personal Information
          </h1>

          <div className="mt-5">
            <PersonalInfoCard />
          </div>
        </div>

        <div className="bg-gray-300 px-5 py-10 mt-3 flex justify-end">
          <button className="text-white text-2xl font-bold w-48 bg-orange-600 py-2 border border-white">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}
