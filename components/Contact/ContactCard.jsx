import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CgAsterisk } from "react-icons/cg";

export default function ContactCard() {
  return (
    <div className="flex px-24 gap-60">
      <div>
        <h1 className="text-[45px] font-bold leading-snug tracking-wide">
          Need additional<br></br> information?
        </h1>
        <p className="text-gray-500 mt-8">
          A multifaceted professional skilled in multiple fields of<br></br>{" "}
          research, development as well as a learning specialist.<br></br> Over
          15 years of experience.
        </p>
        <div className="flex gap-4 items-center mt-8 hover:text-orange-600 hover:cursor-pointer font-rubik">
          <FiPhoneCall className="text-xl" />
          <h1 className="tracking-wider">(123) -456-789</h1>
        </div>
        <div className="flex gap-4 items-center mt-5 hover:text-orange-600 hover:cursor-pointer font-rubik">
          <GoMail className="text-xl" />
          <h1 className="tracking-wider">care@gmail.com</h1>
        </div>
        <div className="flex gap-4 items-center mt-5 hover:text-orange-600 hover:cursor-pointer font-rubik">
          <CiLocationArrow1 className="text-2xl text-black font-extrabold" />
          <h1 className="tracking-wider">Belgrade, Serbia</h1>
        </div>
      </div>

      <form className="flex flex-col" action="">
        <div className="flex mt-2">
          <label className="font-semibold text-lg">Full Name</label>
          <CgAsterisk className="text-orange-600 font-bold" />
        </div>
        <input
          type="text"
          name="FullName"
          id=""
          placeholder="E.g: Joe Shmoe"
          className="bg-gray-100 px-8 py-4 mt-2 font-normal"
        />
        <div className="flex mt-2">
          <label className="font-semibold text-lg" htmlFor="Email">
            Email
          </label>
          <CgAsterisk className="text-orange-600 font-bold" />
        </div>
        <input
          type="email"
          placeholder="youremail@example.com"
          className="bg-gray-100 px-8 py-4 mt-2 font-normal"
        />
        <div className="flex mt-2">
          <label className="font-semibold text-lg" htmlFor="info">
            Tell us about it
          </label>
          <CgAsterisk className="text-orange-600 font-bold" />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Write Here.."
          className="bg-gray-100 px-8 py-16 mt-2 font-normal"
        />

        <button className="flex gap-2 items-center bg-orange-600 text-white px-40 py-5 mt-5">
          <HiOutlineMailOpen className="text-xl" />
          <h1 className="font-semibold text-lg">Send Message</h1>
        </button>
      </form>
    </div>
  );
}
