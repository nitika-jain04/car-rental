import { IoMdStarOutline } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";

export default function VehicleCard({
  image,
  carbrand,
  price,
  carname,
  cartype,
  fueltype,
}) {
  return (
    <div className="flex flex-col border border-gray-300">
      <img className="w-80" src={image} alt="" />
      <div className="px-10 py-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{carbrand}</h1>
          <h1 className="text-2xl font-bold">{`$${price}`}</h1>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex font-semibold text-lg">
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
          </div>
          <h4 className="flex font-normal text-lg">per day</h4>
        </div>

        <div className="flex justify-between text-gray-500 text-lg mt-2">
          <div className="flex items-center gap-3">
            <FaCarSide />
            <h5>{carname}</h5>
          </div>

          <div className="flex items-center gap-3">
            <h5>3/5</h5>
            <FaCarSide />
          </div>
        </div>

        <div className="flex justify-between text-gray-500 text-lg mt-2">
          <div className="flex items-center gap-3">
            <FaCarSide />
            <h5>{cartype}</h5>
          </div>

          <div className="flex items-center gap-3">
            <h5>{fueltype}</h5>
            <FaCarSide />
          </div>
        </div>

        <hr className="w-full mt-3 text-gray-800" />

        <button className="bg-orange-600 px-5 py-4 mt-2 w-full text-white font-bold shadow-slate-200 text-lg  hover:shadow-lg hover:shadow-orange-600">
          Book Ride
        </button>
      </div>
    </div>
  );
}
