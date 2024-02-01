import { BsInfo } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { LuAsterisk } from "react-icons/lu";
import { useState } from "react";

export default function BookingConfirmation({ onClose }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleClick() {
    setButtonClicked(true);
  }

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center bg-black bg-opacity-10 overflow-hidden">
      <div className="bg-white p-1 rounded shadow-md max-h-[80vh] overflow-auto">
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
          <div className="bg-gray-300 px-5 py-10 mt-3 flex justify-end">
            <button
              className="text-white text-2xl font-bold w-48 bg-orange-600 py-2 border border-white"
              onClick={handleClick}
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalInfoCard() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [phone, setphone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  return (
    <div className="bg-slat text-sm mt-2 text-gray-500">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">First Name</h1>
            <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
          </div>
          <input
            className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
            type="text"
            name="firstname"
            id=""
            required
            placeholder="Enter your first name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
        </div>

        <div>
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">Last Name</h1>
            <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
          </div>
          <input
            className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
            type="text"
            name="lastname"
            id=""
            required
            placeholder="Enter your last name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">Phone Number</h1>
            <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
          </div>
          <input
            className="bg-gray-300 p-3 text-sm mt-2 text-gray-600 w-[310px]"
            type="number"
            name="phonenumber"
            id=""
            required
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>

        <div>
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">Age</h1>
            <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
          </div>
          <input
            className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
            type="number"
            name="age"
            id=""
            required
            placeholder="18"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex gap-1">
          <h1 className="text-gray-500 font-medium">Email Address</h1>
          <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
        </div>{" "}
        <input
          className="bg-gray-300 p-3 text-sm mt-2 w-full"
          type="email"
          name="emailaddress"
          id=""
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <div className="flex gap-1">
          <h1 className="text-gray-500 font-medium">Address</h1>
          <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
        </div>
        <input
          className="bg-gray-300 p-3 text-sm mt-2 w-full"
          type="text"
          name="address"
          id=""
          required
          placeholder="Enter your street address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">City</h1>
            <LuAsterisk className="text-orange-600 text-sm mb-2 font-extrabold" />
          </div>{" "}
          <input
            className="bg-gray-300 p-3 text-sm w-[310px]"
            type="text"
            name="city"
            id=""
            required
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">Zip Code</h1>
            <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
          </div>
          <input
            className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
            type="number"
            name="zipcode"
            id=""
            required
            placeholder="Enter your zip code"
            value={zipcode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-2 mt-5">
        <input
          type="checkbox"
          name=""
          id=""
          placeholder="Please send latest news and updates"
        />
        <h1 className="text-gray-500 font-medium">
          Please send me latest news and updates
        </h1>
      </div>
    </div>
  );
}
