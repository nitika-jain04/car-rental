import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";

export default function Info() {
  return (
    <div className="flex flex-col md:flex-row gap-28 px-4 md:px-10 lg:px-20 py-8 md:py-16 lg:py-24">
      <div className="flex flex-col gap-3 font-poppins">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">CAR</h1>
          <h1 className="text-lg md:text-2xl lg:text-3xl">Rental</h1>
        </div>
        <p className="text-gray-500 max-w-sm md:max-w-md lg:max-w-lg leading-6">
          We offer a big range of vehicles for<br></br> all your driving needs.
          We have the<br></br> perfect car to meet your needs.
        </p>
        <div className="flex gap-2 items-center mt-3 md:mt-5 hover:text-orange-600 hover:cursor-pointer font-rubik font-bold">
          <FiPhoneCall className="text-md md:text-lg lg:text-xl" />
          <h1 className="tracking-wider text-sm md:text-base lg:text-lg">
            (123) -456-789
          </h1>
        </div>
        <div className="flex gap-2 items-center md:mt-3 hover:text-orange-600 hover:cursor-pointer font-rubik font-bold">
          <GoMail className="text-md md:text-lg lg:text-xl" />
          <h1 className="tracking-wider text-sm md:text-base lg:text-lg">
            care@gmail.com
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 font-poppins mt-6 md:mt-0">
        <h1 className="font-bold text-lg md:text-2xl lg:text-2xl">COMPANY</h1>
        <h3>New York</h3>
        <h3>Careers</h3>
        <h3>Mobile</h3>
        <h3>Blog</h3>
        <h3>How we work</h3>
      </div>

      <div className="flex flex-col gap-4 mt-6 md:mt-0 font-poppins">
        <h1 className="font-bold text-lg md:text-2xl lg:text-2xl">
          WORKING HOURS
        </h1>
        <h3>Mon - Fri 9:00AM 9:00PM</h3>
        <h3>Sat: 9:00AM - 19:00PM</h3>
        <h3>Sun: Closed</h3>
      </div>

      <div className="flex flex-col gap-4 mt-6 md:mt-0 font-poppins">
        <h1 className="font-bold text-lg md:text-2xl lg:text-2xl">
          SUBSCRIPTION
        </h1>
        <p>
          Subscribe your email address for<br></br> latest news & updates.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            className="bg-gray-100 px-3 py-2 text-sm md:text-base text-center text-gray-900"
            type="email"
            placeholder="Enter Email Address"
          />
          <button className="bg-orange-600 px-3 py-2 text-white tracking-wide font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
