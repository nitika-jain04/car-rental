import { FaRegCheckCircle } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="flex flex-col md:flex-row md:mt-20 ml-4 md:ml-10 lg:ml-20 lg:mt-28">
        <div className="lg:mb-60 md:mt-8 md:mb-0 md:mr-20">
          <h4 className="font-extrabold text-lg md:text-xl lg:text-2xl">
            Plan your trip now
          </h4>
          <h1 className="text-3xl md:text-5xl mt-3 font-extrabold tracking-wider">
            Save <span className="text-orange-600">big</span> with our car
            rental
          </h1>

          <p className="mt-4 md:mt-8 text-gray-500 max-w-md md:max-w-4xl">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            <br></br>
            flexible pick-up options, and much more.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-6 md:mt-10">
            <button className="flex items-center gap-2 bg-orange-600 text-white font-bold px-6 md:px-8 py-3 md:py-5 shadow-2xl rounded-sm">
              <h1 className="font-bold tracking-wide">Book Ride</h1>
              <FaRegCheckCircle className="text-lg md:text-xl" />
            </button>
            <button className="flex items-center gap-2 bg-black text-white font-bold px-6 md:px-8 py-3 md:py-5 rounded-sm hover:bg-white hover:text-black hover:border-black border-2 transition duration-150">
              <h1 className="font-bold tracking-wide">Learn More</h1>
              <GoChevronRight className="text-xl md:text-2xl font-extrabold" />
            </button>
          </div>
        </div>

        <img
          className="md:w-[850px] mb-12 md:mb-0 lg:-mt-10 lg:-ml-10"
          src="/car.png"
          alt=""
        />
      </div>
    </div>
  );
}
