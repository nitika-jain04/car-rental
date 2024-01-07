import { LuAsterisk } from "react-icons/lu";

export default function PersonalInfoCard() {
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
            placeholder="Enter your first name"
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
            placeholder="Enter your last name"
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
            type="text"
            name="phonenumber"
            id=""
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">Age</h1>
            <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
          </div>
          <input
            className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
            type="text"
            name="age"
            id=""
            placeholder="18"
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
          placeholder="Enter your email address"
        />
      </div>

      <div className="mt-5">
        <div className="flex gap-1">
          <h1 className="text-gray-500 font-medium">Address</h1>
          <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
        </div>
        <input
          className="bg-gray-300 p-3 text-sm mt-2 w-full"
          type="email"
          name="emailaddress"
          id=""
          placeholder="Enter your street address"
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
            placeholder="Enter your city"
          />
        </div>

        <div>
          <div className="flex gap-1">
            <h1 className="text-gray-500 font-medium">Zip Code</h1>
            <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
          </div>
          <input
            className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
            type="text"
            name="lastname"
            id=""
            placeholder="Enter your zip code"
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
