import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-5">
      <div className="flex items-center">
        <img className="w-36" src="/carLogo.png" alt="Car Logo" />
      </div>

      <div className="hidden md:flex gap-4 items-center tracking-wide mt-4 md:mt-0 font-rubik font-medium">
        <Link className="hover:text-orange-600" href="/">
          Home
        </Link>
        <Link className="hover:text-orange-600" href="/about">
          About
        </Link>
        <Link className="hover:text-orange-600" href="/models">
          Vehicle Models
        </Link>
        <Link className="hover:text-orange-600" href="/testimonials">
          Testimonials
        </Link>
        <Link className="hover:text-orange-600" href="/team">
          Our Team
        </Link>
        <Link className="hover:text-orange-600" href="/contact">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4 mt-4 md:mt-0 font-rubik">
        <div>
          <Link href="/signin">
            <h2 className="hidden md:block hover:text-orange-600 hover:cursor-pointer font-medium tracking-wide">
              Sign In
            </h2>
          </Link>
        </div>
        <div>
          <Link href="/signup">
            <button className="bg-orange-600 px-4 md:px-8 py-2 md:py-3 text-white rounded-md font-bold shadow-md">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
