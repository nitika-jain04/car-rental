import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";

export default function Info() {
  return (
    <div className="flex gap-20 px-20 py-28">
      <div className="flex flex-col gap-3 font-poppins">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl">CAR</h1>
          <h1 className="text-2xl">Rental</h1>
        </div>
        <p className="text-gray-500 max-w-sm leading-5">
          We offers a big range of vehicles for<br></br> all your driving needs.
          We have the<br></br> perfect car to meet your needs.
        </p>
        <div className="flex gap-2 items-center mt-5 hover:text-orange-600 hover:cursor-pointer font-rubik font-bold">
          <FiPhoneCall className="text-xl" />
          <h1 className="tracking-wider">(123) -456-789</h1>
        </div>
        <div className="flex gap-2 items-center hover:text-orange-600 hover:cursor-pointer font-rubik font-bold">
          <GoMail className="text-xl" />
          <h1 className="tracking-wider">care@gmail.com</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 font-poppins">
        <h1 className="font-bold text-2xl">COMPANY</h1>
        <h3>New York</h3>
        <h3>Careers</h3>
        <h3>Mobile</h3>
        <h3>Blog</h3>
        <h3>How we work</h3>
      </div>

      <div className="flex flex-col gap-4 ml-24 font-poppins">
        <h1 className="font-bold text-2xl">WORKING HOURS</h1>
        <h3>Mon - Fri 9:00AM 9:00PM</h3>
        <h3>Sat: 9:00AM - 19:00PM</h3>
        <h3>Sun: Closed</h3>
      </div>

      <div className="flex flex-col gap-4 ml-8 font-poppins">
        <h1 className="font-bold text-2xl">SUBSCRIPTION</h1>
        <p>
          Subscribe your Email address for<br></br> latest news & updates.
        </p>
        <input
          className="bg-gray-100 px-3 py-3 text-sm text-center text-gray-900"
          type="email"
          placeholder="Enter Email Address"
        />
        <button className="bg-orange-600 px-3 py-3 text-white tracking-wide font-medium">
          Submit
        </button>
      </div>
    </div>
  );
}
