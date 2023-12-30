import { FaRegCheckCircle } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

export default function HeroSection() {
  return (
    <div className="flex mt-32 ml-[68px]">
      <div className="mt-[44px]">
        <h4 className="font-extrabold text-xl">Plan your trip now</h4>
        <h1 className="text-5xl mt-3 font-extrabold tracking-wide">
          Save <span className="text-orange-600">big</span> with our car rental
        </h1>

        <p className="mt-8 text-gray-500 max-w-4xl">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className="flex gap-5 mt-10">
          <button className="flex items-center gap-2 bg-orange-600 text-white font-bold px-8 py-5 shadow-2xl rounded-sm">
            <h1>Book Ride</h1>
            <FaRegCheckCircle className="text-xl" />
          </button>
          <button className="flex items-center gap-2 bg-black text-white font-bold px-8 py-5 rounded-sm hover:bg-white hover:text-black hover:border-black border border-transparent hover:border-2 transition duration-300">
            <h1>Learn More</h1>
            <GoChevronRight className="text-2xl font-extrabold" />
          </button>
        </div>
      </div>

      <img className="w-[800px] mb-5 mr-28" src="/car.png" alt="" />
    </div>
  );
}